import resume from '../resume/resume.json';
import avatar from '../prompts/data/avatar.json';
import couples from '../prompts/data/couples.json';

// Enrichment uses technologies already present in the original descriptions.
const stations = [
  { id: 'calendar', category: 'Agent Systems', tags: ['LangChain', 'LLMs', 'GCP', 'OAuth2'], linkLabel: 'GitHub profile', motif: 'REQUEST → AGENTS → CALENDAR' },
  { id: 'jobfit', category: 'Document Intelligence', tags: ['LLMs', 'Tool chaining', 'REST APIs'], linkLabel: 'View repository', motif: 'RESUME → PARSING → RANKING' },
  { id: 'table2html', category: 'Document Intelligence', tags: ['Python', 'Table extraction', 'HTML'], linkLabel: 'View Python package', motif: 'TABLE → EXTRACTION → HTML' },
];
export const projects = resume.projects.map((project, index) => ({ ...project, ...stations[index] }));
const promptFiles = import.meta.glob('../prompts/data/prompts/*.txt', { query: '?raw', import: 'default', eager: true });
export const prompts = [...avatar.map(item => ({ ...item, collection: 'Avatar' })), ...couples.map(item => ({ ...item, collection: 'Couples' }))]
  .map(item => ({ ...item, text: promptFiles[`../prompts/data/${item.promptFile}`] || '' }));
export { resume };
