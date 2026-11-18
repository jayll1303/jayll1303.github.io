const MAX_DATE_MS = 8.64e15;

function assertDateRange(milliseconds) {
  if (!Number.isFinite(milliseconds) || Math.abs(milliseconds) > MAX_DATE_MS) {
    throw new RangeError('Timestamp is outside the supported date range.');
  }
  const date = new Date(milliseconds);
  if (Number.isNaN(date.getTime())) throw new RangeError('Timestamp is outside the supported date range.');
  return date;
}

function parseIsoDateTime(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{1,9}))?)?(Z|[+-]\d{2}:?\d{2})?)?$/i.exec(value);
  if (!match) throw new TypeError('Enter a Unix timestamp or ISO date-time string.');
  const [, year, month, day, hour = '0', minute = '0', second = '0', , zone = ''] = match;
  const y = Number(year), m = Number(month), d = Number(day);
  const h = Number(hour), min = Number(minute), s = Number(second);
  const daysInMonth = new Date(Date.UTC(y, m, 0)).getUTCDate();
  if (m < 1 || m > 12 || d < 1 || d > daysInMonth || h > 23 || min > 59 || s > 59) {
    throw new TypeError('Enter a valid ISO date-time.');
  }
  const milliseconds = Date.parse(`${value}${zone ? '' : 'Z'}`);
  if (!Number.isFinite(milliseconds)) throw new TypeError('Enter a valid ISO date-time.');
  return assertDateRange(milliseconds).getTime();
}

export function parseTimestamp(input, { unit = 'auto' } = {}) {
  if (typeof input !== 'string' && typeof input !== 'number') {
    throw new TypeError('Timestamp input must be a string or number.');
  }
  const value = String(input).trim();
  if (!value) throw new TypeError('Enter a timestamp or ISO date-time.');
  if (unit !== 'auto' && unit !== 'seconds' && unit !== 'milliseconds') {
    throw new TypeError('Unit must be auto, seconds, or milliseconds.');
  }
  if (/^[+-]?\d+(?:\.\d+)?$/.test(value)) {
    const numeric = Number(value);
    if (!Number.isFinite(numeric)) throw new RangeError('Timestamp must be finite.');
    const detectedUnit = unit === 'auto' ? (Math.abs(numeric) < 1e11 ? 'seconds' : 'milliseconds') : unit;
    return assertDateRange(detectedUnit === 'seconds' ? numeric * 1000 : numeric).getTime();
  }
  if (unit !== 'auto') throw new TypeError('A unit can only be specified for a Unix timestamp.');
  return parseIsoDateTime(value);
}

export function formatTimestamp(input, options) {
  const milliseconds = parseTimestamp(input, options);
  const date = assertDateRange(milliseconds);
  return {
    unixSeconds: milliseconds / 1000,
    unixMilliseconds: milliseconds,
    iso: date.toISOString(),
    utc: date.toUTCString(),
    local: date.toLocaleString(),
  };
}
