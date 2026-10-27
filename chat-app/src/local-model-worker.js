import { directAnswer, groundedAnswer, isVietnamese, retrieveResumeFacts } from './resume-context.js';

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
  let relevant;
  let fallback;
  let ids;
  try {
    const query = String(question || '');
    const direct = directAnswer(query);
    if (direct) {
      self.postMessage({ requestId, type: 'result', ...direct, source: 'guide' });
      return;
    }
    self.postMessage({ requestId, type: 'progress', message: 'Finding relevant résumé facts…' });
    relevant = retrieveResumeFacts(query);
    const vietnamese = isVietnamese(query);
    fallback = groundedAnswer(relevant.slice(0, 1), vietnamese);
    ids = [...new Set(relevant.flatMap(fact => fact.ids))].slice(0, 3);
    if (!relevant.length) {
      self.postMessage({ requestId, type: 'result', answer: fallback, ids, source: 'guide' });
      return;
    }

    self.postMessage({ requestId, type: 'preview', answer: fallback, ids });
    const generator = await getGenerator(requestId);
    const evidence = relevant.map((fact, index) => `${index + 1}. ${vietnamese ? fact.vi : fact.en}`).join('\n');
    const result = await generator([
      { role: 'system', content: 'Answer the visitor using only the résumé facts supplied. Copy one or two complete fact sentences exactly; do not add any claim or explanation. Match the language of the question.' },
      { role: 'user', content: `RÉSUMÉ FACTS:\n${evidence}\n\nQUESTION: ${question}\n\nANSWER:` }
    ], { max_new_tokens: 150, do_sample: false });
    const generated = result[0]?.generated_text;
    const candidate = (Array.isArray(generated) ? generated.at(-1)?.content || '' : String(generated || '').split('ANSWER:').at(-1)).trim();
    // The small local model may make up details. Only accept text copied from the vetted facts.
    const source = relevant.map(fact => vietnamese ? fact.vi : fact.en).join(' ');
    const answer = candidate && source.includes(candidate) ? candidate : fallback;
    self.postMessage({ requestId, type: 'result', answer, ids, source: 'model' });
  } catch (error) {
    if (relevant?.length) self.postMessage({ requestId, type: 'result', answer: fallback, ids, source: 'guide' });
    else self.postMessage({ requestId, type: 'error', message: error instanceof Error ? error.message : 'The local model could not start.' });
  }
}

let queue = Promise.resolve();
self.onmessage = ({ data }) => {
  queue = queue.then(() => answerQuestion(data));
};
