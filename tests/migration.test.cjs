const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync, existsSync } = require('node:fs');
const { join } = require('node:path');

const read = path => readFileSync(path);
const json = path => JSON.parse(read(path));

test('production build preserves existing résumé data, PDF and static routes', () => {
  for (const file of ['resume/index.html', 'resume/resume.json', 'resume/resume.pdf', 'prompts/index.html', 'prompts/app.js', 'legacy/index.html', 'terminal.js', 'terminal.css']) {
    assert.deepEqual(read(join('dist', file)), read(file), file);
  }
  const resume = json('dist/resume/resume.json');
  assert.equal(resume.projects.length, 3);
  assert.equal(resume.certificates.length, 4);
  assert.match(resume.education[0].score, /100% Scholarship/);
});

test('all original prompt images and available text survive the production build', () => {
  const { collections } = json('prompts/data/index.json');
  const entries = collections.flatMap(tag => json(`prompts/data/${tag}.json`));
  const missing = [];
  assert.equal(entries.length, 18);
  assert.equal(new Set(entries.map(p => p.id)).size, 18);
  for (const prompt of entries) {
    const image = `prompts/${prompt.imageUrl}`;
    assert.deepEqual(read(join('dist', image)), read(image));
    const text = `prompts/data/${prompt.promptFile}`;
    if (!existsSync(text)) missing.push(prompt.id);
    else {
      assert.ok(read(text).toString().trim(), prompt.id);
      assert.deepEqual(read(join('dist', text)), read(text));
    }
  }
  assert.deepEqual(missing, ['urban-night-streetwear-editorial']);
});
