import { contact, education, experience, projects } from './portfolio-data.js';

export const searchEntries = [
  ...projects.map(project => ({
    id: project.id,
    title: project.title,
    text: [project.category, project.summary, ...project.details, project.outcome, ...project.stack].filter(Boolean).join(' '),
    view: { kind: 'project', id: project.id },
    summary: project.summary
  })),
  {
    id: 'experience', title: 'Experience',
    text: experience.map(item => `${item.role} ${item.place} ${item.detail}`).join(' '),
    view: { kind: 'experience' }, summary: 'Work history at FE Credit, FPT Software QAI and earlier roles.'
  },
  {
    id: 'achievements', title: 'Education & achievements',
    text: `${education.school} ${education.detail}`,
    view: { kind: 'achievements' }, summary: `${education.school} · ${education.detail}`
  },
  {
    id: 'contact', title: 'Contact Jay',
    text: `contact email collaboration reach Jay ${contact.email}`,
    view: { kind: 'contact' }, summary: 'Email and GitHub contact details.'
  }
];

const normalize = value => value.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd');
const words = value => normalize(value).match(/[\p{L}\p{N}+#.]+/gu) || [];
const stopWords = new Set(['jay', 'co', 'lam', 'gi', 've', 'cho', 'toi', 'ban', 'which', 'what', 'about', 'uses', 'with', 'the', 'and', 'project', 'portfolio']);
const translations = new Map([
  ['giong', 'voice'], ['noi', 'speech'], ['tieng', 'speech'], ['tai', 'document'],
  ['lieu', 'document'], ['hoa', 'invoice'], ['don', 'invoice'], ['lich', 'calendar'],
  ['nghien', 'research'], ['cuu', 'research'], ['kinh', 'experience'], ['nghiem', 'experience'],
  ['lien', 'contact'], ['he', 'contact'], ['tuyen', 'resume'], ['dung', 'resume']
]);

export function rankEntries(query, limit = 4) {
  const terms = [...new Set(words(query).filter(term => term.length > 2 && !stopWords.has(term)).flatMap(term => [term, translations.get(term)].filter(Boolean)))];
  if (!terms.length) return [];
  return searchEntries.map(entry => {
    const titleTerms = words(entry.title);
    const bodyTerms = new Set(words(entry.text));
    const score = terms.reduce((total, term) => total + (titleTerms.some(word => word === term || (term.length >= 4 && word.startsWith(term))) ? 4 : 0) + (bodyTerms.has(term) ? 1 : 0), 0);
    return { ...entry, score };
  }).filter(entry => entry.score > 0).sort((a, b) => b.score - a.score).slice(0, limit);
}

export function entriesForIds(ids) {
  return [...new Set(ids)].map(id => searchEntries.find(entry => entry.id === id)).filter(Boolean).slice(0, 4);
}

export function chooseModelMatches(query, modelIds) {
  const ranked = rankEntries(query, 6);
  const allowed = ranked.length ? ranked : searchEntries;
  let ids = allowed.filter(entry => modelIds.includes(entry.id)).map(entry => entry.id).slice(0, 3);
  if (ranked[0]?.score >= 4 && ranked[0].score >= (ranked[1]?.score || 0) + 3) {
    ids = [ranked[0].id, ...ids.filter(id => id !== ranked[0].id)].slice(0, 3);
  }
  const selectedScore = Math.max(0, ...ranked.filter(entry => ids.includes(entry.id)).map(entry => entry.score));
  if (ranked[0]?.score >= 2 && (!ids.length || (ranked[0].score >= 4 && selectedScore < ranked[0].score - 2))) {
    ids = ranked.slice(0, 3).map(entry => entry.id);
  }
  return ids;
}
