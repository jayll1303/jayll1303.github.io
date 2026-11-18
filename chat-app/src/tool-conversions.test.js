import test from 'node:test';
import assert from 'node:assert/strict';
import { formatJson, escapeString, unescapeString } from './tool-conversions.js';

test('JSON formatter formats nested data and supports compact output', () => {
  const input = '{"text":"hello", "items":[true,null,{"n":3}]}';
  assert.equal(formatJson(input), JSON.stringify(JSON.parse(input), null, 2));
  assert.equal(formatJson(input, 4), JSON.stringify(JSON.parse(input), null, 4));
  assert.equal(formatJson(input, 0), '{"text":"hello","items":[true,null,{"n":3}]}');
  assert.equal(formatJson('null'), 'null');
  assert.equal(formatJson('"hello"'), '"hello"');
});

test('JSON formatter rejects malformed JSON and invalid indentation', () => {
  for (const input of ['', '{', '{"a":1,}', 'undefined', 'NaN', '[01]', '"unterminated']) {
    assert.throws(() => formatJson(input), /Invalid JSON/);
  }
  for (const indent of [-1, 11, 1.5, '2', null, NaN]) {
    assert.throws(() => formatJson('{}', indent), /indentation/);
  }
});

test('JSON formatter rejects unsafe integers including nested, negative, and exponent forms', () => {
  for (const input of [
    '9007199254740993', '-9007199254740993', '{"id":9223372036854775807}',
    '[{"id":9.007199254740993e15}]', '9007199254740993.0', '1e20',
  ]) {
    assert.throws(() => formatJson(input), /unsafe integer.*strings/i);
  }
  for (const input of ['1e400', '-1e400']) {
    assert.throws(() => formatJson(input), /finite range/);
  }
  assert.equal(formatJson('9007199254740991'), '9007199254740991');
  assert.equal(formatJson('-9007199254740991'), '-9007199254740991');
  const quoted = JSON.stringify({ id: '9223372036854775807', '9007199254740993': 'a\\"9007199254740993' });
  assert.deepEqual(JSON.parse(formatJson(quoted)), JSON.parse(quoted));
});

test('all conversion modes roundtrip Unicode, backslashes, newlines, and markup', () => {
  const text = 'Tiếng Việt 日本語 😀 & <tag> "quoted" \'single\' \\path\nnext\tline';
  for (const mode of ['json', 'html', 'url']) {
    assert.equal(unescapeString(escapeString(text, mode), mode), text);
  }
  assert.equal(escapeString('', 'json'), '""');
  assert.equal(unescapeString('""', 'json'), '');
});

test('JSON escape includes quotes and unescape only accepts JSON strings', () => {
  assert.equal(escapeString('a\nb\\c"', 'json'), '"a\\nb\\\\c\\""');
  for (const input of ['text', '"bad\\x"', '"line\nbreak"']) {
    assert.throws(() => unescapeString(input, 'json'), /valid quoted JSON string/);
  }
  for (const input of ['123', 'null', 'false', '[]', '{}', '9007199254740993']) {
    assert.throws(() => unescapeString(input, 'json'), /requires a quoted string/);
  }
});

test('HTML escapes all five markup characters and decodes HTML5 named and numeric entities', () => {
  assert.equal(escapeString('&<>"\'', 'html'), '&amp;&lt;&gt;&quot;&#39;');
  assert.equal(unescapeString('&amp;&lt;&gt;&quot;&apos;&#39;&#x27;', 'html'), '&<>"\'\'\'');
  assert.equal(unescapeString('&copy;&eacute;&nbsp;&NotEqualTilde;', 'html'), '©é\u00a0≂̸');
  assert.equal(unescapeString('&#128512;&#x1F600;&#X1f600;', 'html'), '😀😀😀');
  assert.equal(unescapeString('&#0;&#x10ffff;', 'html'), '\0' + String.fromCodePoint(0x10ffff));
});

test('HTML decode is exactly one pass and never parses markup', () => {
  assert.equal(unescapeString('&amp;lt;script&amp;gt;', 'html'), '&lt;script&gt;');
  assert.equal(unescapeString('&amp;#x1F600;', 'html'), '&#x1F600;');
  assert.equal(unescapeString('&amp;bogus;', 'html'), '&bogus;');
  const markup = '<img src=x onerror="throw 1"><script>throw 2</script>';
  assert.equal(unescapeString(markup, 'html'), markup);
  assert.equal(unescapeString('fish & chips &copy &#65', 'html'), 'fish & chips &copy &#65');
});

test('HTML rejects unknown names, malformed numeric references, and invalid Unicode scalars', () => {
  for (const input of ['&bogus;', '&#;', '&#x;', '&#-1;', '&#12oops;']) {
    assert.throws(() => unescapeString(input, 'html'), /HTML entity/);
  }
  for (const input of ['&#55296;', '&#xDFFF;', '&#1114112;', '&#x110000;', `&#${'9'.repeat(400)};`]) {
    assert.throws(() => unescapeString(input, 'html'), /Unicode scalar/);
  }
});

test('URL uses component encoding and preserves plus signs literally when decoding', () => {
  assert.equal(escapeString('a+b c/?&=', 'url'), 'a%2Bb%20c%2F%3F%26%3D');
  assert.equal(unescapeString('a+b%20c%2B', 'url'), 'a+b c+');
  for (const input of ['%', '%2', '%GG', '%FF', '%C0%AF', '%ED%A0%80', '%F4%90%80%80']) {
    assert.throws(() => unescapeString(input, 'url'), /Invalid URL encoding/);
  }
  assert.throws(() => escapeString('\ud800', 'url'), /unpaired Unicode surrogate/);
});

test('converters reject nonstrings and unsupported modes with friendly errors', () => {
  for (const input of [null, undefined, 12, {}, [], true]) {
    assert.throws(() => formatJson(input), /text as a string/);
    assert.throws(() => escapeString(input, 'json'), /text as a string/);
    assert.throws(() => unescapeString(input, 'json'), /text as a string/);
  }
  for (const mode of [undefined, '', 'JSON', 'xml', '__proto__']) {
    assert.throws(() => escapeString('text', mode), /supported conversion mode/);
    assert.throws(() => unescapeString('text', mode), /supported conversion mode/);
  }
});
