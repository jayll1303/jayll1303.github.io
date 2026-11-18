const DEFAULTS = { maxLines: 4000, maxWork: 2000000, maxChars: 200000, maxRenderedLines: 1000 };

const splitLines = text => text === '' ? [] : String(text).split('\n');

// A common prefix/suffix gives useful inline highlights with linear time and memory.
function inlineSegments(oldText, newText) {
  let prefix = 0, suffix = 0;
  while (prefix < oldText.length && prefix < newText.length && oldText[prefix] === newText[prefix]) prefix++;
  while (suffix < oldText.length - prefix && suffix < newText.length - prefix && oldText[oldText.length - 1 - suffix] === newText[newText.length - 1 - suffix]) suffix++;
  const segments = text => [
    { text: text.slice(0, prefix), changed: false },
    { text: text.slice(prefix, text.length - suffix), changed: true },
    { text: suffix ? text.slice(-suffix) : '', changed: false },
  ].filter(segment => segment.text !== '');
  return { old: segments(oldText), new: segments(newText) };
}

function myers(a, b, maxWork) {
  const n = a.length, m = b.length, max = n + m;
  let v = new Map([[1, 0]]), work = 0;
  const trace = [];
  for (let d = 0; d <= max; d++) {
    if ((d + 1) * (d + 1) > maxWork) return null;
    trace.push(new Map(v));
    for (let k = -d; k <= d; k += 2) {
      let x = k === -d || (k !== d && (v.get(k - 1) ?? -1) < (v.get(k + 1) ?? -1)) ? (v.get(k + 1) ?? 0) : (v.get(k - 1) ?? 0) + 1;
      let y = x - k;
      while (x < n && y < m && a[x] === b[y]) { x++; y++; if (++work > maxWork) return null; }
      v.set(k, x);
      if (x >= n && y >= m) {
        const out = []; let bx = n, by = m;
        for (let bd = d; bd >= 0; bd--) {
          const prev = trace[bd], bk = bx - by;
          const pk = bk === -bd || (bk !== bd && (prev.get(bk - 1) ?? -1) < (prev.get(bk + 1) ?? -1)) ? bk + 1 : bk - 1;
          const px = bd === 0 ? 0 : (prev.get(pk) ?? 0), py = px - pk;
          while (bx > px && by > py) out.push({ type: 'equal', old: a[--bx], new: b[--by] });
          if (bd > 0) { if (bx === px) out.push({ type: 'add', new: b[--by] }); else out.push({ type: 'remove', old: a[--bx] }); }
        }
        return out.reverse();
      }
    }
  }
  return null;
}

function coarse(a, b) {
  return [...a.map(old => ({ type: 'remove', old, new: null, oldSegments: [{ text: old, changed: true }], newSegments: [] })),
    ...b.map(value => ({ type: 'add', old: null, new: value, oldSegments: [], newSegments: [{ text: value, changed: true }] }))];
}

/** Returns identity, full change counts, bounded rendered lines, and optional limit flags. */
export function diffLines(oldText, newText, options = {}) {
  const limits = { ...DEFAULTS, ...options };
  oldText = String(oldText ?? ''); newText = String(newText ?? '');
  if (oldText.length > limits.maxChars || newText.length > limits.maxChars) return { identical: false, limited: true, tooLarge: true, lines: [] };
  const a = splitLines(oldText), b = splitLines(newText);
  const counts = lines => ({ added: lines.filter(line => line.type === 'add').length, replaced: lines.filter(line => line.type === 'replace').length, removed: lines.filter(line => line.type === 'remove').length });
  const fallback = () => {
    const allLines = [];
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      if (i < a.length) allLines.push({ type: 'remove', old: a[i], new: null, oldSegments: [{ text: a[i], changed: true }], newSegments: [] });
      if (i < b.length) allLines.push({ type: 'add', old: null, new: b[i], oldSegments: [], newSegments: [{ text: b[i], changed: true }] });
    }
    return { identical: false, limited: true, ...counts(allLines), lines: allLines.slice(0, limits.maxRenderedLines) };
  };
  if (a.length === b.length && a.every((line, i) => line === b[i])) return { identical: true, limited: a.length > limits.maxRenderedLines, lines: a.slice(0, limits.maxRenderedLines).map(line => ({ type: 'equal', old: line, new: line, oldSegments: [{ text: line, changed: false }], newSegments: [{ text: line, changed: false }] })) };
  if (a.length + b.length > limits.maxLines) return fallback();
  const ops = myers(a, b, limits.maxWork);
  if (!ops) return fallback();
  const lines = [];
  for (let i = 0; i < ops.length;) {
    if (ops[i].type === 'equal') {
      const line = ops[i++].old;
      lines.push({ type: 'equal', old: line, new: line, oldSegments: [{ text: line, changed: false }], newSegments: [{ text: line, changed: false }] });
      continue;
    }
    const removed = [], added = [];
    while (i < ops.length && ops[i].type !== 'equal') { const op = ops[i++]; (op.type === 'remove' ? removed : added).push(op.type === 'remove' ? op.old : op.new); }
    const paired = Math.min(removed.length, added.length);
    for (let j = 0; j < paired; j++) {
      const seg = inlineSegments(removed[j], added[j]);
      lines.push({ type: 'replace', old: removed[j], new: added[j], oldSegments: seg.old, newSegments: seg.new });
    }
    for (let j = paired; j < removed.length; j++) lines.push({ type: 'remove', old: removed[j], new: null, oldSegments: [{ text: removed[j], changed: true }], newSegments: [] });
    for (let j = paired; j < added.length; j++) lines.push({ type: 'add', old: null, new: added[j], oldSegments: [], newSegments: [{ text: added[j], changed: true }] });
  }
  return { identical: false, limited: lines.length > limits.maxRenderedLines, ...counts(lines), lines: lines.slice(0, limits.maxRenderedLines) };
}
