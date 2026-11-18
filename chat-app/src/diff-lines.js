const DEFAULTS = { maxLines: 4000, maxWork: 2000000, maxInlineChars: 20000 };

const splitLines = text => text === '' ? [] : String(text).split('\n');

function inlineSegments(oldText, newText, limit) {
  if (oldText === newText) return { old: [{ text: oldText, changed: false }], new: [{ text: newText, changed: false }] };
  if (oldText.length + newText.length > limit) return { old: [{ text: oldText, changed: true }], new: [{ text: newText, changed: true }] };
  const dp = Array.from({ length: oldText.length + 1 }, () => new Uint32Array(newText.length + 1));
  for (let i = oldText.length - 1; i >= 0; i--) for (let j = newText.length - 1; j >= 0; j--) {
    dp[i][j] = oldText[i] === newText[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  }
  const oldFlags = Array(oldText.length).fill(true), newFlags = Array(newText.length).fill(true);
  let i = 0, j = 0;
  while (i < oldText.length && j < newText.length) {
    if (oldText[i] === newText[j]) { oldFlags[i++] = false; newFlags[j++] = false; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) i++;
    else j++;
  }
  const prefix = oldText.length && newText.length ? (() => { let n = 0; while (n < oldText.length && n < newText.length && oldText[n] === newText[n]) n++; return n; })() : 0;
  const suffix = oldText.length && newText.length ? (() => { let n = 0; while (n < oldText.length - prefix && n < newText.length - prefix && oldText[oldText.length - 1 - n] === newText[newText.length - 1 - n]) n++; return n; })() : 0;
  const oldEnd = oldText.length - suffix, newEnd = newText.length - suffix;
  for (let k = prefix; k < oldEnd; k++) oldFlags[k] = true;
  for (let k = prefix; k < newEnd; k++) newFlags[k] = true;  const pack = (text, flags) => {
    const out = [];
    for (let k = 0; k < text.length; k++) {
      const changed = flags[k], last = out[out.length - 1];
      if (last && last.changed === changed) last.text += text[k];
      else out.push({ text: text[k], changed });
    }
    return out;
  };
  return { old: pack(oldText, oldFlags), new: pack(newText, newFlags) };
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

/** Returns { identical, limited, lines }; line records contain type, old/new and inline segment arrays. */
export function diffLines(oldText, newText, options = {}) {
  const limits = { ...DEFAULTS, ...options };
  const a = splitLines(String(oldText ?? '')), b = splitLines(String(newText ?? ''));
  if (a.length === b.length && a.every((line, i) => line === b[i])) return { identical: true, limited: false, lines: a.map(line => ({ type: 'equal', old: line, new: line, oldSegments: [{ text: line, changed: false }], newSegments: [{ text: line, changed: false }] })) };
  if (a.length + b.length > limits.maxLines) return { identical: false, limited: true, lines: coarse(a, b) };
  const ops = myers(a, b, limits.maxWork);
  if (!ops) return { identical: false, limited: true, lines: coarse(a, b) };
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
      const seg = inlineSegments(removed[j], added[j], limits.maxInlineChars);
      lines.push({ type: 'replace', old: removed[j], new: added[j], oldSegments: seg.old, newSegments: seg.new });
    }
    for (let j = paired; j < removed.length; j++) lines.push({ type: 'remove', old: removed[j], new: null, oldSegments: [{ text: removed[j], changed: true }], newSegments: [] });
    for (let j = paired; j < added.length; j++) lines.push({ type: 'add', old: null, new: added[j], oldSegments: [], newSegments: [{ text: added[j], changed: true }] });
  }
  return { identical: false, limited: false, lines };
}

