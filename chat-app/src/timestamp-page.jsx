import React from 'react';
import { formatTimestamp } from './timestamp-converter';

export default function TimestampPage({ value, onChange, unit, onUnitChange, onCopy, copyStatus, onNow, onClear }) {
  let result = null, error = '';
  if (value) try { result = formatTimestamp(value, { unit }); } catch (cause) { error = cause.message; }
  const rows = result ? [['ISO date-time', result.iso], ['UTC', result.utc], ['Local time', result.local], ['Unix seconds', String(result.unixSeconds)], ['Unix milliseconds', String(result.unixMilliseconds)]] : [];
  return <section className='tools-page timestamp-page' aria-labelledby='tools-title'>
    <header className='utility-heading'><span className='utility-eyebrow'>TOOLS</span><h1 id='tools-title'>Timestamp Converter</h1><p>Convert Unix timestamps and ISO date-time values.</p></header>
    <p className='tool-help' id='timestamp-help'>Zone-less ISO dates and date-times are interpreted as UTC. Explicit offsets are honored; local output includes your timezone abbreviation.</p><div className='tool-toolbar'><div className='tool-setting'><label htmlFor='timestamp-unit'>Unit</label><select id='timestamp-unit' value={unit} onChange={event=>onUnitChange(event.target.value)}><option value='auto'>Auto detect</option><option value='seconds' disabled={Boolean(value && !/^[+-]?\d+(?:\.\d+)?$/.test(value.trim()))}>Seconds</option><option value='milliseconds' disabled={Boolean(value && !/^[+-]?\d+(?:\.\d+)?$/.test(value.trim()))}>Milliseconds</option></select></div><div className='tool-actions'><button type='button' onClick={onNow}>Now</button><button type='button' onClick={onClear} disabled={!value}>Clear</button></div></div>
    <div className='tool-pane timestamp-entry'><div className='tool-pane-heading'><label htmlFor='timestamp-input'>Timestamp or date-time</label><button type='button' onClick={()=>onCopy(value,'Input')} disabled={!value}>Copy</button></div><input id='timestamp-input' value={value} onChange={event=>onChange(event.target.value)} placeholder='1735689600 or 2025-01-01T00:00:00Z' autoCapitalize='off' autoCorrect='off' aria-invalid={Boolean(error)} aria-describedby={error?'timestamp-error':'timestamp-help'}/></div>
    {error ? <p className='tool-error timestamp-error' id='timestamp-error' role='alert'>{error}</p> : result ? <div className='timestamp-results' aria-live='polite'>{rows.map(([label,text])=><div className='timestamp-row' key={label}><span>{label}</span><code>{text}</code><button type='button' onClick={()=>onCopy(text,label)} aria-label={'Copy '+label}>Copy</button></div>)}</div> : <p className='tool-help'>Enter seconds, milliseconds, or ISO date-time. Results update as you type.</p>}
    <div className='tool-status' role='status' aria-live='polite'><p>{copyStatus || (result?'Valid date-time.':'Ready when you are.')}</p></div><p className='tool-privacy'>Conversion happens in this tab. Nothing is uploaded or saved.</p>
  </section>;
}
