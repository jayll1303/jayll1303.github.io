export const tools = [
  { id: 'json', title: 'JSON Beautify', description: 'Format or minify JSON as you type.' },
  { id: 'string', title: 'String Escape / Unescape', description: 'Escape and unescape text using JSON, HTML or URL encoding.' },
  { id: 'timestamp', title: 'Timestamp Converter', description: 'Convert Unix timestamps and ISO date-time values.' },
  { id: 'diff', title: 'Diff Checker', description: 'Compare two text drafts and see what changed.' },
  { id: 'prompt-forge', title: 'Prompt Forge', description: 'Build reusable prompt templates with variables, live preview and JSON import/export.' }
];

export const defaultTool = tools[0].id;
export function toolFor(id) { return tools.find(tool => tool.id === id) || tools[0]; }
