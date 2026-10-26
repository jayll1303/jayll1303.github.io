import test from 'node:test';
import assert from 'node:assert/strict';
import { chooseModelMatches, entriesForIds, rankEntries } from './portfolio-search.js';

test('fallback search ranks a named project and its technologies', () => {
  assert.equal(rankEntries('VoxCPM voice')[0].id, 'voxcpm-vn');
  assert.equal(rankEntries('GraphRAG OCR')[0].id, 'graph-rag');
  assert.equal(rankEntries('Which project uses GraphRAG?')[0].id, 'graph-rag');
  assert.equal(rankEntries('dự án giọng nói')[0].view.kind, 'project');
  assert.ok(rankEntries('dự án giọng nói').some(entry => entry.id === 'voxcpm-vn'));
  assert.ok(!rankEntries('giọng nói').some(entry => entry.id === 'european-documents'));
});

test('model IDs resolve only to published portfolio records', () => {
  assert.deepEqual(entriesForIds(['graph-rag', 'missing', 'graph-rag']).map(entry => entry.id), ['graph-rag']);
  assert.deepEqual(chooseModelMatches('Which project uses GraphRAG?', ['voxcpm-vn']), ['graph-rag']);
  assert.ok(chooseModelMatches('Jay có làm gì về giọng nói?', []).includes('voicebot'));
  assert.ok(chooseModelMatches('Jay có làm gì về giọng nói?', ['experience']).includes('voicebot'));
});
