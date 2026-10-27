import test from 'node:test';
import assert from 'node:assert/strict';
import { groundedAnswer, isVietnamese, retrieveResumeFacts } from './resume-context.js';

test('retrieves résumé facts for common English and Vietnamese questions', () => {
  assert.equal(retrieveResumeFacts('Who is Jay?')[0].key, 'overview');
  assert.equal(retrieveResumeFacts('Tell me about Jay')[0].key, 'overview');
  assert.equal(retrieveResumeFacts('Jay học trường nào?')[0].key, 'education');
  assert.equal(retrieveResumeFacts('What awards has Jay won?')[0].key, 'achievements');
  assert.equal(retrieveResumeFacts('What did Jay do with GraphRAG?')[0].key, 'graph-rag');
  assert.equal(retrieveResumeFacts('Jay có kỹ năng gì?')[0].key, 'skills');
  assert.equal(retrieveResumeFacts('Jay đã làm những dự án nào?')[0].key, 'projects');
});

test('answers only from known facts and handles unknown questions', () => {
  const facts = retrieveResumeFacts('Jay học trường nào?');
  assert.equal(isVietnamese('Jay học trường nào?'), true);
  assert.match(groundedAnswer(facts, true), /Đại học FPT/);
  assert.deepEqual(retrieveResumeFacts("What is Jay's favorite food?"), []);
  assert.match(groundedAnswer([], false), /couldn't find/);
  assert.match(groundedAnswer([], true), /chưa thấy/);
  assert.deepEqual(retrieveResumeFacts('Does Jay have experience with Java?'), []);
  assert.deepEqual(retrieveResumeFacts('Did Jay study medicine?'), []);
  assert.deepEqual(retrieveResumeFacts('What projects did Jay build in COBOL?'), []);
  assert.deepEqual(retrieveResumeFacts('Jay từng làm ở SpaceX chưa?'), []);
  assert.deepEqual(retrieveResumeFacts('Jay có kỹ năng gì?')[0].ids, ['achievements']);
});

test('shipped facts exclude private résumé contact details', () => {
  const all = retrieveResumeFacts('Jay projects education experience skills awards', 50);
  const text = all.map(fact => `${fact.en} ${fact.vi}`).join(' ');
  assert.doesNotMatch(text, /\+84|0903|jayll13\.work@|Ho Chi Minh City/);
});
