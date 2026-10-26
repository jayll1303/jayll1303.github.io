import { chooseModelMatches, rankEntries, searchEntries } from './portfolio-search.js';

let generatorPromise;

async function getGenerator(requestId) {
  if (!generatorPromise) {
    generatorPromise = (async () => {
      const { pipeline } = await import('@huggingface/transformers');
      const gpu = Boolean(self.navigator.gpu);
      self.postMessage({ requestId, type: 'progress', message: gpu ? 'Preparing local model · WebGPU' : 'Preparing local model · CPU' });
      return pipeline('text-generation', 'HuggingFaceTB/SmolLM2-135M-Instruct', {
        device: gpu ? 'webgpu' : 'wasm',
        dtype: gpu ? 'q4f16' : 'q4',
        progress_callback: progress => {
          if (progress.status === 'progress' && Number.isFinite(progress.progress)) {
            self.postMessage({ requestId, type: 'progress', message: `Downloading local model · ${Math.round(progress.progress)}%` });
          }
        }
      });
    })().catch(error => { generatorPromise = null; throw error; });
  }
  return generatorPromise;
}

async function answerQuestion({ requestId, question }) {
  try {
    const generator = await getGenerator(requestId);
    self.postMessage({ requestId, type: 'progress', message: 'Finding relevant portfolio records…' });
    const ranked = rankEntries(question, 6);
    const candidates = ranked.length ? ranked : searchEntries;
    const catalog = candidates.map(entry => `${entry.id}: ${entry.title} — ${entry.summary}`).join('\n');
    const result = await generator([
      { role: 'system', content: 'You select relevant portfolio records for a visitor question. Return only 1 to 3 exact record IDs separated by commas, or NONE if the question is unrelated. Do not explain or invent IDs.' },
      { role: 'user', content: `PORTFOLIO RECORDS:\n${catalog}\n\nQUESTION: ${question}\n\nRELEVANT IDS:` }
    ], { max_new_tokens: 48, do_sample: false });
    const generated = result[0]?.generated_text;
    const answer = Array.isArray(generated) ? generated.at(-1)?.content || '' : String(generated || '').split('RELEVANT IDS:').at(-1);
    const generatedIds = searchEntries.filter(entry => new RegExp(`\\b${entry.id}\\b`, 'i').test(answer)).map(entry => entry.id);
    const ids = chooseModelMatches(question, generatedIds);
    self.postMessage({ requestId, type: 'result', ids });
  } catch (error) {
    self.postMessage({ requestId, type: 'error', message: error instanceof Error ? error.message : 'The local model could not start.' });
  }
}

let queue = Promise.resolve();
self.onmessage = ({ data }) => {
  queue = queue.then(() => answerQuestion(data));
};
