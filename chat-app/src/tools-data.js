export const tools = [
  { id: 'json', title: 'JSON Beautify', description: 'Format or minify JSON as you type.' },
  { id: 'string', title: 'String Escape / Unescape', description: 'Escape and unescape text using JSON, HTML or URL encoding.' },
  { id: 'prompt-forge', title: 'Prompt Forge', description: 'Build reusable prompt templates with variables, live preview and JSON import/export.' }
];

export const defaultTool = tools[0].id;
export function toolFor(id) { return tools.find(tool => tool.id === id) || tools[0]; }
