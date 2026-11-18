import test from 'node:test';
import assert from 'node:assert/strict';
import {
  MAX_CONFIG_BYTES, MAX_TEMPLATE_LENGTH, MAX_VALUE_LENGTH, MAX_VARIABLES,
  exportPromptConfig, inspectVariables, parsePromptConfig, placeholderKeys, renderPrompt, templateParts, variableHue
} from './prompt-forge.js';

const variable = (key, value) => ({ key, value });
const config = (template, variables) => JSON.stringify({ template, variables });

test('renders repeated and padded placeholders with Unicode and multiline values', () => {
  const rendered = renderPrompt('Hi {{ name }}! {{name}}: {{task}} / {{Name}}', [variable(' name ', 'Tiếng Việt 😀'), variable('task', 'line 1\nline 2')]);
  assert.equal(rendered.text, 'Hi Tiếng Việt 😀! Tiếng Việt 😀: line 1\nline 2 / {{Name}}');
  assert.deepEqual(rendered.missing, ['Name']);
  assert.deepEqual(rendered.keys, ['name', 'task', 'Name']);
});

test('treats regex names, replacement sequences, markup and inserted tokens literally', () => {
  const dollars = String.fromCharCode(36).repeat(2) + String.fromCharCode(36) + '&';
  const output = renderPrompt('{{a.b}} {{a+b}} {{[x]}} {{__proto__}}', [
    variable('a.b', dollars), variable('a+b', '{{[x]}}'), variable('[x]', '<img src=x onerror=alert(1)>'), variable('__proto__', 'safe')
  ]);
  assert.equal(output.text, dollars + ' {{[x]}} <img src=x onerror=alert(1)> safe');
  assert.deepEqual(output.missing, []);
});

test('keeps unresolved and blank values visible and reports duplicate names', () => {
  const output = renderPrompt('{{x}} {{ x }} {{empty}} {{missing}}', [variable('x', 'one'), variable(' x ', 'two'), variable('empty', '  ')]);
  assert.equal(output.text, '{{x}} {{ x }} {{empty}} {{missing}}');
  assert.deepEqual(output.missing, ['x', 'empty', 'missing']);
  assert.match(output.issues[0], /more than once/);
  assert.match(output.issues[1], /more than once/);
  assert.match(inspectVariables([variable('', ''), variable('x{y', ''), variable('line\nname', '')])[2], /line breaks/);
  assert.deepEqual(placeholderKeys('{{}} {{ }} {{x}} {{ x }}'), ['x']);
});

test('imports original Prompt Forge files and discards external IDs and unknown fields', () => {
  const parsed = parsePromptConfig(JSON.stringify({ template: '{{name}}', variables: [{ id: 'old-id', key: 'name', value: 'Jay', other: true }], other: true }));
  assert.deepEqual(parsed, { template: '{{name}}', variables: [variable('name', 'Jay')] });
  assert.deepEqual(parsePromptConfig(config('', [])), { template: '', variables: [] });
});

test('rejects invalid or ambiguous configurations without coercing values', () => {
  for (const input of ['{', 'null', '[]', config({}, []), config('x', {}), config('x', [null]), config('x', [variable('a', 5)])]) {
    assert.throws(() => parsePromptConfig(input));
  }
  for (const variables of [[variable(' ', 'a')], [variable('a}', 'b')], [variable('a', ''), variable(' a ', '')]]) {
    assert.throws(() => parsePromptConfig(config('x', variables)));
  }
});

test('enforces file, template, variable and value limits before applying imports', () => {
  assert.throws(() => parsePromptConfig(' '.repeat(MAX_CONFIG_BYTES + 1)), /1 MB/);
  assert.throws(() => parsePromptConfig(config('a'.repeat(MAX_TEMPLATE_LENGTH + 1), [])), /template/);
  assert.throws(() => parsePromptConfig(config('', Array.from({length: MAX_VARIABLES + 1}, (_, i) => variable('v' + i, '')))), /at most/);
  assert.throws(() => parsePromptConfig(config('', [variable('x', 'a'.repeat(MAX_VALUE_LENGTH + 1))])), /length limit/);
  assert.throws(() => parsePromptConfig(config('', [variable('a'.repeat(101), 'x')])), /length limit/);
});

test('exports a reusable configuration and roundtrips Unicode, empty templates and values', () => {
  const template = '{{a}}\n{{b}}';
  const variables = [{ id: 4, key: 'a', value: 'Việt 😀' }, variable('b', '')];
  assert.deepEqual(parsePromptConfig(exportPromptConfig(template, variables)), { template, variables: variables.map(({key, value}) => ({key, value})) });
  assert.deepEqual(parsePromptConfig(exportPromptConfig('', [])), { template: '', variables: [] });
  assert.throws(() => exportPromptConfig('x', [variable('', 'value')]), /name/);
});

test('bounds large expansion and handles long whitespace placeholders', () => {
  const output = renderPrompt('{{x}}'.repeat(2000), [variable('x', 'a'.repeat(1000))]);
  assert.equal(output.text, '');
  assert.match(output.error, /too large/);
  const whitespace = '{{' + ' '.repeat(90000) + '}}';
  assert.equal(renderPrompt(whitespace, []).text, whitespace);
});


test('colored segments preserve exact text and never recursively parse variable values', () => {
  const template = 'Start {{ a }} / {{missing}} / {{b}} end';
  const output = renderPrompt(template, [{id:1,key:'a',value:'{{b}}'}, {id:2,key:'b',value:'<b>plain</b>\nnext'}]);
  assert.equal(output.parts.map(part => part.text).join(''), output.text);
  assert.deepEqual(output.parts.filter(part => part.kind).map(({key,kind}) => ({key,kind})), [
    {key:'a',kind:'value'}, {key:'missing',kind:'name'}, {key:'b',kind:'value'}
  ]);
  assert.equal(templateParts(template).map(part => part.text).join(''), template);
  assert.deepEqual(templateParts(template).filter(part => part.kind).map(part => part.key), ['a','missing','b']);
  assert.deepEqual(renderPrompt('', []).parts, []);
  assert.deepEqual(templateParts('plain text'), [{text:'plain text'}]);
});

test('variable color follows identity independently of order, label and value', () => {
  const rows = [{id:1,key:'task'}, {id:2,key:'goal'}, {id:3,key:'audience'}, {id:4,key:'tone'}];
  const before = new Map(rows.map(row => [row.id, variableHue(row.id)]));
  for (const row of [...rows].reverse()) assert.equal(variableHue(row.id), before.get(row.id));
  assert.equal(new Set(rows.map(row => variableHue(row.id))).size, 4);
  assert.equal(new Set(Array.from({length:200}, (_,index) => variableHue(index + 1))).size, 200);
});
