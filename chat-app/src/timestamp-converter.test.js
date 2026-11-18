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
    local: new Date(1700000000000).toLocaleString(undefined, { timeZoneName: 'short' }),
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
  assert.equal(parseTimestamp('2023-01-01', { unit: 'seconds' }), Date.UTC(2023, 0, 1));
  assert.throws(() => parseTimestamp(null), /string or number/);
});

test('rejects unsupported Date endpoints cleanly', () => {
  assert.throws(() => formatTimestamp('8640000000000001', { unit: 'milliseconds' }), /date range/);
});

test('handles date-only input, early Gregorian years, and validates timezone offsets', () => {
  assert.equal(parseTimestamp('0099-02-28'), new Date('0099-02-28T00:00:00Z').getTime());
  assert.equal(parseTimestamp('0000-02-29'), new Date('0000-02-29T00:00:00Z').getTime());
  assert.throws(() => parseTimestamp('0100-02-29'));
  assert.throws(() => parseTimestamp('2024-01-01T00:00:00+24:00'), /timezone offset/);
  assert.throws(() => parseTimestamp('2024-01-01T00:00:00+01:60'), /timezone offset/);
  assert.equal(parseTimestamp('2024-01-01T14:00:00+14:00'), Date.parse('2024-01-01T00:00:00Z'));
  assert.throws(() => parseTimestamp('2024-01-01T00:00:00+14:01'), /timezone offset/);
  assert.throws(() => parseTimestamp('2024-01-01T00:00:00-15:00'), /timezone offset/);
});
