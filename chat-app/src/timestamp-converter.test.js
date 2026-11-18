import test from 'node:test';
import assert from 'node:assert/strict';
import { formatTimestamp, parseTimestamp } from './timestamp-converter.js';

test('auto-detects epoch seconds and milliseconds and formats both', () => {
  const seconds = '1700000000';
  const millis = '1700000000123';
  assert.equal(parseTimestamp(seconds), 1700000000000);
  assert.equal(parseTimestamp(millis), 1700000000123);
  assert.equal(parseTimestamp(seconds, { unit: 'milliseconds' }), 1700000000);
  assert.equal(parseTimestamp(millis, { unit: 'seconds' }), 1700000000123000);
  assert.deepEqual(formatTimestamp(seconds), {
    unixSeconds: 1700000000,
    unixMilliseconds: 1700000000000,
    iso: '2023-11-14T22:13:20.000Z',
    utc: 'Tue, 14 Nov 2023 22:13:20 GMT',
    local: new Date(1700000000000).toLocaleString(),
  });
});

test('parses ISO date, UTC and offset date-times', () => {
  assert.equal(parseTimestamp('2023-11-14T22:13:20Z'), 1700000000000);
  assert.equal(parseTimestamp('2023-11-15T00:13:20+02:00'), 1700000000000);
  assert.equal(parseTimestamp('2023-11-14T22:13:20.123'), 1700000000123);
  assert.equal(parseTimestamp('2023-11-14'), Date.UTC(2023, 10, 14));
});

test('rejects invalid input, dates, units, and out-of-range timestamps', () => {
  for (const input of ['', 'not a date', '2023-02-29', '2023-13-01', '2023-01-01T25:00:00', '1e3']) {
    assert.throws(() => parseTimestamp(input));
  }
  assert.throws(() => parseTimestamp('999999999999999999999999'));
  assert.throws(() => parseTimestamp('1000', { unit: 'ticks' }), /Unit must/);
  assert.throws(() => parseTimestamp('2023-01-01', { unit: 'seconds' }), /only be specified/);
  assert.throws(() => parseTimestamp(null), /string or number/);
});

test('rejects unsupported Date endpoints cleanly', () => {
  assert.throws(() => formatTimestamp('8640000000000001', { unit: 'milliseconds' }), /date range/);
});
