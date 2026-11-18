import test from 'node:test';
import assert from 'node:assert/strict';
import { diffLines } from './diff-lines.js';

test('identifies inserted lines and preserves equal context', () => {
  const result = diffLines('one\nthree', 'one\ntwo\nthree');
  assert.equal(result.identical, false);
  assert.deepEqual(result.lines.map(line => line.type), ['equal', 'add', 'equal']);
  assert.equal(result.lines[1].new, 'two');
});

test('identifies removed lines', () => {
  const result = diffLines('one\ntwo\nthree', 'one\nthree');
  assert.deepEqual(result.lines.map(line => line.type), ['equal', 'remove', 'equal']);
  assert.equal(result.lines[1].old, 'two');
});

test('pairs changed lines and marks inline changed segments', () => {
  const result = diffLines('keep\ncolor: red;\nend', 'keep\ncolor: blue;\nend');
  const changed = result.lines[1];
  assert.equal(changed.type, 'replace');
  assert.equal(changed.old, 'color: red;');
  assert.equal(changed.new, 'color: blue;');
  assert.ok(changed.oldSegments.some(segment => segment.text === 'red' && segment.changed));
  assert.ok(changed.newSegments.some(segment => segment.text === 'blue' && segment.changed));
  assert.equal(result.lines[0].oldSegments[0].changed, false);
});

test('reports identical and empty input', () => {
  assert.deepEqual(diffLines('same\ntext', 'same\ntext'), {
    identical: true, limited: false,
    lines: ['same', 'text'].map(text => ({ type: 'equal', old: text, new: text, oldSegments: [{ text, changed: false }], newSegments: [{ text, changed: false }] }))
  });
  assert.deepEqual(diffLines('', ''), { identical: true, limited: false, lines: [] });
  assert.deepEqual(diffLines('', 'new').lines.map(line => line.type), ['add']);
});

test('falls back when line or work limits are exceeded', () => {
  const byLines = diffLines('a\nb', 'x\ny', { maxLines: 2 });
  assert.equal(byLines.limited, true);
  assert.deepEqual(byLines.lines.map(line => line.type), ['remove', 'add', 'remove', 'add']);
  assert.deepEqual({ added: byLines.added, replaced: byLines.replaced, removed: byLines.removed }, { added: 2, replaced: 0, removed: 2 });
  const byWork = diffLines('a\nb\nc', 'x\ny\nz', { maxWork: 1 });
  assert.equal(byWork.limited, true);
  assert.deepEqual(byWork.lines.map(line => line.type), ['remove', 'add', 'remove', 'add', 'remove', 'add']);
  assert.deepEqual({ added: byWork.added, replaced: byWork.replaced, removed: byWork.removed }, { added: 3, replaced: 0, removed: 3 });
});

test('bounds large character input and rendered line output', () => {
  const huge = diffLines('123456', '654321', { maxChars: 5 });
  assert.equal(huge.tooLarge, true);
  assert.deepEqual(huge.lines, []);
  const truncated = diffLines('a\nb\nc', 'x\ny\nz', { maxLines: 2, maxRenderedLines: 2 });
  assert.equal(truncated.limited, true);
  assert.equal(truncated.lines.length, 2);
  assert.deepEqual(truncated.lines.map(line => line.type), ['remove', 'add']);
  assert.deepEqual({ added: truncated.added, replaced: truncated.replaced, removed: truncated.removed }, { added: 3, replaced: 0, removed: 3 });
});
