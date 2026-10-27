import { achievements, education, experience, projects, skills } from './portfolio-data.js';

// Short, public résumé facts. The PDF itself and personal contact details are never shipped.
const facts = [
  {
    key: 'overview', ids: ['experience', 'achievements'],
    terms: 'who jay about introduction introduce profile background bio gioi thieu la ai ve ban than',
    en: `Jay (Pham Phu Ngoc Trai) is an AI engineer and Senior Technology Solution Specialist at FE Credit. He studied Artificial Intelligence at FPT University.`,
    vi: 'Jay (Phạm Phú Ngọc Trai) là kỹ sư AI và Senior Technology Solution Specialist tại FE Credit. Anh học ngành Trí tuệ nhân tạo tại Đại học FPT.'
  },
  {
    key: 'experience', ids: ['experience'],
    terms: 'work job career experience employment role company employer fe credit fpt software qai digiuni lam viec kinh nghiem cong ty vi tri nghe nghiep',
    en: `Jay's résumé lists: ${experience.map(item => `${item.role} at ${item.place.split(' · ')[0]} (${item.period})`).join('; ')}.`,
    vi: 'Theo CV, Jay làm Senior Technology Solution Specialist tại FE Credit (từ 7/2025); AI Engineer tại FPT Software QAI (11/2023–4/2024); AI Engineer Intern tại FPT Software QAI (9–11/2023); và giảng viên trợ giảng lập trình tại DigiUni (3–8/2023).'
  },
  {
    key: 'education', ids: ['achievements'],
    terms: 'education university school degree major gpa scholarship study hoc van truong dai hoc nganh diem hoc bong',
    en: `Jay studied Artificial Intelligence at ${education.school}, with a GPA of 8.2/10 and a 100% scholarship.`,
    vi: 'Jay học ngành Trí tuệ nhân tạo tại Đại học FPT, đạt GPA 8,2/10 và học bổng 100%.'
  },
  {
    key: 'achievements', ids: ['achievements', 'antiquities'],
    terms: 'award achievement prize medal contest research resfes olympic danh hieu thanh tich giai thuong huy chuong nghien cuu',
    en: `Jay's résumé lists ${achievements.join('; ')}.`,
    vi: 'Theo CV, Jay đạt giải Nhất RESFES 2023, học bổng 100% Đại học FPT, danh hiệu sinh viên xuất sắc trong bốn học kỳ, giải Best Mentor 2022, hai huy chương bạc và giải Nhất học sinh giỏi cấp tỉnh năm 2020.'
  },
  {
    key: 'skills', ids: ['achievements'],
    terms: 'skill technology technical stack language programming framework tools cloud ky nang cong nghe ngon ngu lap trinh',
    en: `Jay lists ${Object.entries(skills).map(([group, items]) => `${group}: ${items.join(', ')}`).join('; ')}.`,
    vi: 'Kỹ năng trong CV của Jay gồm Python, Rust, Go, .NET, C++; PyTorch, LangChain, Flask, YOLO, Pandas, Seaborn, PyQt5, vLLM; GitHub, GitLab, Docker, Python Wheel, AWS, Azure và GCP.'
  },
  {
    key: 'projects', ids: ['graph-rag', 'voicebot', 'voxcpm-vn'],
    terms: 'projects project portfolio built created product du an san pham da lam',
    en: 'His résumé covers enterprise GraphRAG, a debt collection voicebot, Vietnamese speech research (VoxCPM-VN), document extraction, and conversational AI projects.',
    vi: 'CV của Jay ghi nhận các dự án GraphRAG doanh nghiệp, voicebot thu hồi nợ, nghiên cứu giọng nói tiếng Việt (VoxCPM-VN), trích xuất tài liệu và AI hội thoại.'
  },
  {
    key: 'voice-ai', ids: ['voicebot', 'alice', 'voxcpm-vn'],
    terms: 'voice agent voice ai voicebot speech assistant asr tts s2s conversation giong noi tro ly am thanh',
    en: 'Jay has worked on voice AI through a debt collection voicebot using intent recognition and RAG, the Alice speech-to-speech assistant built with Azure AI Foundry and Microsoft Agent Framework, and Vietnamese speech model research in VoxCPM-VN.',
    vi: 'Jay đã làm voice AI qua voicebot thu hồi nợ dùng nhận diện ý định và RAG, trợ lý Alice giao tiếp bằng giọng nói xây với Azure AI Foundry và Microsoft Agent Framework, cùng nghiên cứu mô hình tiếng nói tiếng Việt VoxCPM-VN.'
  }
];

for (const project of projects) {
  facts.push({
    key: project.id,
    ids: [project.id],
    terms: `${project.title} ${project.category} ${project.stack.join(' ')} ${project.id.replaceAll('-', ' ')}`,
    en: `${project.title}: ${project.summary} ${project.details.join(' ')} ${project.outcome || ''}`.trim(),
    vi: `${project.title}: ${project.summary} ${project.outcome || ''}`.trim()
  });
}

const stop = new Set('a an and are can did do does for has have he his how i is jay me of on or the to was what when where which who why with you your tell please show know about summarize summary sumary summarise knowledge expertise guy this co cua da duoc gi la lam nhung the nao toi ve va tung chua dang cac dau current recent latest'.split(' '));
const normalize = value => value.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/\bdu\s+an\b/g, 'project');
const tokens = value => (normalize(value).match(/[\p{L}\p{N}+#.]+/gu) || []).filter(word => word.length > 2 && !stop.has(word));
const aliases = new Map([
  ['awards', 'award'], ['achievements', 'achievement'], ['studied', 'study'],
  ['worked', 'work'], ['built', 'projects'], ['created', 'projects'],
  ['projects', 'project'], ['technologies', 'technology'], ['agents', 'agent'],
  ['hoc', 'education'], ['truong', 'university'], ['nganh', 'major'], ['bong', 'scholarship'],
  ['kinh', 'experience'], ['nghiem', 'experience'], ['viec', 'work'], ['cong', 'company'],
  ['nang', 'skill'], ['nghe', 'technology'], ['giai', 'award'], ['thuong', 'award'],
  ['giong', 'voice'], ['noi', 'voice'], ['tieng', 'vietnamese'], ['lieu', 'document'],
  ['hoa', 'invoice'], ['don', 'invoice'], ['lich', 'calendar'], ['cuu', 'research']
]);
const knownTerms = new Set(facts.flatMap(fact => tokens(`${fact.terms} ${fact.en} ${fact.vi}`)));

export function directAnswer(question) {
  const normalized = normalize(question).trim();
  if (/^(hi|hello|hey|xin chao|chao)[!?.\s]*$/.test(normalized)) return {
    answer: isVietnamese(question)
      ? 'Chào bạn! Bạn có thể hỏi mình về kinh nghiệm, dự án, voice AI hoặc kỹ năng của Jay.'
      : "Hi! Ask me about Jay's work, projects, voice AI, or skills.",
    ids: []
  };
  if (/\b(?:ms\s+|microsoft\s+)?copilot\b/.test(normalized)) return {
    answer: isVietnamese(question)
      ? 'CV của Jay không đề cập Microsoft Copilot. CV có ghi Jay xây dựng trợ lý Alice bằng Microsoft Agent Framework và Azure AI Foundry; đó là những công nghệ khác Copilot.'
      : "Jay's résumé doesn't mention Microsoft Copilot. It does describe building the Alice assistant with Microsoft Agent Framework and Azure AI Foundry; those are different from Copilot.",
    ids: ['alice']
  };
  return null;
}

export function retrieveResumeFacts(question, limit = 3) {
  const questionTerms = tokens(question);
  // Reject an unsupported subject after a relation such as "with Java" or "at SpaceX".
  // Unfamiliar phrasing elsewhere should not hide an otherwise documented topic.
  const target = normalize(question).match(/\b(?:with|using|in|at|about|study|studied|know|knows|voi|bang|tai|o|hoc)\s+([a-z0-9+#.]+)/)?.[1];
  if (target?.length >= 4 && !knownTerms.has(target) && !knownTerms.has(aliases.get(target))) return [];
  const query = new Set(questionTerms.flatMap(word => [word, aliases.get(word)].filter(Boolean)));
  if (!query.size && /\bjay\b/i.test(question)) return [facts[0]];
  if (!query.size) return [];
  return facts.map(fact => {
    const terms = new Set(tokens(fact.terms));
    const score = [...query].reduce((sum, word) => sum + (terms.has(word) ? 2 : [...terms].some(term => word.length > 4 && term.startsWith(word)) ? 1 : 0), 0);
    return { ...fact, score };
  }).filter(fact => fact.score > 0).sort((a, b) => b.score - a.score).slice(0, limit);
}

export function isVietnamese(question) {
  return /[ăâđêôơư]/i.test(question) || /\b(anh|bạn|của|làm|gì|dự|án|học|ở|về|những|kỹ|năng)\b/i.test(question);
}

export function groundedAnswer(factsForQuestion, vietnamese) {
  if (!factsForQuestion.length) return vietnamese
    ? 'Mình chưa thấy thông tin đó trong CV của Jay.'
    : "I couldn't find that information in Jay's résumé.";
  return factsForQuestion.map(fact => vietnamese ? fact.vi : fact.en).join(' ');
}
