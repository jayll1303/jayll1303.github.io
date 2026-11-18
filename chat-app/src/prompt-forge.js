export const MAX_CONFIG_BYTES = 1024 * 1024;
export const MAX_TEMPLATE_LENGTH = 100000;
export const MAX_RENDER_LENGTH = 1000000;
export const MAX_VARIABLES = 200;
export const MAX_KEY_LENGTH = 100;
export const MAX_VALUE_LENGTH = 20000;

export const promptExample = {
  template: 'Your task is to {{task}}.\n\nYour main goal is to {{goal}} for {{audience}}.\n\nKeep the tone {{tone}} and include a clear next step.',
  variables: [
    { key: 'task', value: 'write a marketing email' },
    { key: 'goal', value: 'introduce a new productivity app' },
    { key: 'audience', value: 'busy young professionals' },
    { key: 'tone', value: 'friendly and concise' }
  ]
};

const placeholderPattern = () => /{{([^{}]*)}}/g;

export function placeholderKeys(template) {
  return [...new Set(Array.from(template.matchAll(placeholderPattern()), match => match[1].trim()).filter(Boolean))];
}

export function inspectVariables(variables) {
  const counts = new Map();
  for (const variable of variables) {
    const key = variable.key.trim();
    if (key) counts.set(key, (counts.get(key) || 0) + 1);
  }
  return variables.map(({ key, value }) => {
    const name = key.trim();
    if (!name) return 'Enter a variable name.';
    if (/[{}\r\n]/.test(name)) return 'Use a name without braces or line breaks.';
    if (name.length > MAX_KEY_LENGTH) return 'Use at most ' + MAX_KEY_LENGTH + ' characters for a name.';
    if (counts.get(name) > 1) return 'The name ' + name + ' is used more than once.';
    if (value.length > MAX_VALUE_LENGTH) return 'Use at most ' + MAX_VALUE_LENGTH.toLocaleString() + ' characters for a value.';
    return '';
  });
}

export function templateParts(template) {
  const parts = [];
  let cursor = 0;
  for (const match of template.matchAll(placeholderPattern())) {
    if (match.index > cursor) parts.push({ text: template.slice(cursor, match.index) });
    parts.push({ text: match[0], key: match[1].trim(), kind: 'name' });
    cursor = match.index + match[0].length;
  }
  if (cursor < template.length) parts.push({ text: template.slice(cursor) });
  return parts;
}

export function variableHue(id) {
  // Keep the color attached to the row identity, including while it is reordered.
  return (218 + (id - 1) * 137.508) % 360;
}

export function renderPrompt(template, variables) {
  const issues = inspectVariables(variables);
  const values = new Map();
  variables.forEach((variable, index) => {
    if (!issues[index]) values.set(variable.key.trim(), variable.value);
  });
  const keys = placeholderKeys(template);
  const missing = keys.filter(key => !values.has(key) || !values.get(key).trim());
  const parts = [];
  let length = template.length;
  let tooLarge = false;
  let cursor = 0;
  // Build both text and its colored segments in the same literal, single pass.
  const text = template.replace(placeholderPattern(), (token, rawKey, offset) => {
    const key = rawKey.trim();
    const value = values.get(key);
    const replacement = value?.trim() ? value : token;
    length += replacement.length - token.length;
    if (length > MAX_RENDER_LENGTH) tooLarge = true;
    if (!tooLarge) {
      if (offset > cursor) parts.push({ text: template.slice(cursor, offset) });
      parts.push({ text: replacement, key, kind: value?.trim() ? 'value' : 'name' });
    }
    cursor = offset + token.length;
    return tooLarge ? token : replacement;
  });
  if (cursor < template.length && !tooLarge) parts.push({ text: template.slice(cursor) });
  const error = tooLarge ? 'The rendered prompt is too large. Shorten variable values or use fewer repeated placeholders.' : '';
  return { text: tooLarge ? '' : text, parts: tooLarge ? [] : parts, keys, missing, issues, error };
}

export function parsePromptConfig(text) {
  if (new TextEncoder().encode(text).byteLength > MAX_CONFIG_BYTES) throw new Error('Choose a JSON file smaller than 1 MB.');
  let data;
  try { data = JSON.parse(text); } catch { throw new Error('Invalid JSON. Choose a Prompt Forge configuration file.'); }
  if (!data || typeof data !== 'object' || Array.isArray(data) || typeof data.template !== 'string' || !Array.isArray(data.variables)) {
    throw new Error('The file must contain a template string and a variables array.');
  }
  if (data.template.length > MAX_TEMPLATE_LENGTH) throw new Error('The template must be 100,000 characters or fewer.');
  if (data.variables.length > MAX_VARIABLES) throw new Error('A configuration can contain at most ' + MAX_VARIABLES + ' variables.');
  const variables = data.variables.map((variable, index) => {
    if (!variable || typeof variable !== 'object' || typeof variable.key !== 'string' || typeof variable.value !== 'string') {
      throw new Error('Variable ' + (index + 1) + ' must contain a name (key) and value, both strings.');
    }
    if (variable.key.length > MAX_KEY_LENGTH || variable.value.length > MAX_VALUE_LENGTH) {
      throw new Error('Variable ' + (index + 1) + ' exceeds the name or value length limit.');
    }
    return { key: variable.key, value: variable.value };
  });
  const issue = inspectVariables(variables).find(Boolean);
  if (issue) throw new Error(issue);
  return { template: data.template, variables };
}

export function exportPromptConfig(template, variables) {
  // Apply the same checks in both directions so exported files can be imported.
  const data = parsePromptConfig(JSON.stringify({ template, variables }));
  const json = JSON.stringify({ version: 1, ...data }, null, 2);
  parsePromptConfig(json);
  return json;
}
