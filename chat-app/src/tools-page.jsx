import React, { useRef, useState } from 'react';
import { formatJson, escapeString, unescapeString } from './tool-conversions';
import './tools-page.css';

const emptyDraft = () => ({ left: '', right: '', side: 'left', error: '' });
function derive(draft, tool, setting) {
  const source = draft[draft.side];
  const opposite = draft.side === 'left' ? 'right' : 'left';
  if (source === '') return { ...draft, left: '', right: '', error: '' };
  try {
    const value = tool === 'json'
      ? formatJson(source, draft.side === 'left' ? setting : 0)
      : draft.side === 'left' ? escapeString(source, setting) : unescapeString(source, setting);
    return { ...draft, [opposite]: value, error: '' };
  } catch (error) {
    return { ...draft, [opposite]: '', error: error.message || 'Check the input and try again.' };
  }
}

export default function ToolsPage() {
  const [tool, setTool] = useState('json');
  const [drafts, setDrafts] = useState({ json: emptyDraft(), string: emptyDraft() });
  const [indent, setIndent] = useState(2);
  const [mode, setMode] = useState('json');
  const [feedback, setFeedback] = useState('');
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const draft = drafts[tool];
  const setting = tool === 'json' ? indent : mode;
  const isEmpty = draft.left === '' && draft.right === '';
  const labels = tool === 'json' ? ['Source JSON', 'Formatted JSON'] : ['Plain text', 'Escaped string'];
  function edit(side, value) {
    setFeedback('');
    setDrafts(previous => ({ ...previous, [tool]: derive({ ...previous[tool], [side]: value, side }, tool, setting) }));
  }
  function changeSetting(value) {
    if (tool === 'json') setIndent(value); else setMode(value);
    setFeedback('');
    setDrafts(previous => ({ ...previous, [tool]: derive(previous[tool], tool, value) }));
  }
  async function copy(side) {
    try {
      await navigator.clipboard.writeText(draft[side]);
      setFeedback(labels[side === 'left' ? 0 : 1] + ' copied.');
    } catch {
      const editor = side === 'left' ? leftRef.current : rightRef.current;
      editor?.focus();
      editor?.select();
      setFeedback('Clipboard unavailable. Text selected. Press Ctrl+C or Command+C to copy.');
    }
  }
  function clear() {
    setDrafts(previous => ({ ...previous, [tool]: emptyDraft() }));
    setFeedback('Both editors cleared.');
    leftRef.current?.focus();
  }
  function example() {
    edit('left', tool === 'json' ? JSON.stringify({ hello: 'world', items: [1, 2, 3], ready: true }) : 'Hello, world! ' + String.fromCharCode(10) + 'A little text, ready to escape.');
    leftRef.current?.focus();
  }
  return <section className='tools-page' aria-labelledby='tools-title'>
    <header className='utility-heading'><span className='utility-eyebrow'>A SMALL WORKBENCH</span><h1 id='tools-title'>Tools</h1><p>Everyday text tasks, a little easier.</p></header>
    <div className='tool-picker' role='group' aria-label='Choose a tool'>
      <button type='button' aria-pressed={tool === 'json'} onClick={() => { setTool('json'); setFeedback(''); }}><span className='tool-symbol' aria-hidden='true'>{'{ }'}</span><span>JSON Beautify<small>Format & minify</small></span></button>
      <button type='button' aria-pressed={tool === 'string'} onClick={() => { setTool('string'); setFeedback(''); }}><span className='tool-symbol' aria-hidden='true'>Aa</span><span>String Escape / Unescape<small>JSON, HTML & URL</small></span></button>
    </div>
    <div className='tool-toolbar'><div className='tool-setting'><label htmlFor='tool-setting'>{tool === 'json' ? 'Format' : 'Encoding'}</label><select id='tool-setting' value={setting} onChange={event => changeSetting(tool === 'json' ? Number(event.target.value) : event.target.value)}>{tool === 'json' ? <><option value={2}>2 spaces</option><option value={4}>4 spaces</option><option value={0}>Minify</option></> : <><option value='json'>JSON string</option><option value='html'>HTML entities</option><option value='url'>URL component</option></>}</select></div><div className='tool-actions'>{isEmpty && <button type='button' onClick={example}>Try an example</button>}<button type='button' onClick={clear} disabled={isEmpty}>Clear</button></div></div>
    <p className='tool-help' id='tool-help'>Edit either side. The other updates as you type.{tool === 'string' && mode === 'json' ? ' JSON includes the surrounding quotes.' : ''}</p>
    <div className='tool-editors'>{['left', 'right'].map((side, index) => {
      const invalid = Boolean(draft.error) && draft.side === side;
      return <div className={'tool-pane' + (invalid ? ' has-error' : '')} key={side}><div className='tool-pane-heading'><label htmlFor={'tool-' + side}>{labels[index]}</label><button type='button' onClick={() => copy(side)} disabled={draft[side] === ''} aria-label={'Copy ' + labels[index].toLowerCase()}>Copy</button></div><textarea id={'tool-' + side} ref={side === 'left' ? leftRef : rightRef} value={draft[side]} onChange={event => edit(side, event.target.value)} aria-invalid={invalid} aria-describedby={'tool-help' + (invalid ? ' tool-error' : '')} spellCheck={false} autoCapitalize='off' autoCorrect='off' placeholder={tool === 'json' ? index === 0 ? 'Paste JSON here...' : 'Formatted JSON appears here...' : index === 0 ? 'Type or paste plain text...' : 'Paste an escaped string here...'}/><div className='tool-pane-footer'><span>{draft[side].length.toLocaleString()} characters</span><span>Editable</span></div></div>;
    })}</div>
    <div className='tool-status' aria-live='polite' aria-atomic='true'>{draft.error && <p className='tool-error' id='tool-error'>{draft.error}</p>}<p>{feedback || (!draft.error ? isEmpty ? 'Ready when you are.' : 'Both editors are in sync.' : 'The other editor is cleared until this input is valid.')}</p></div>
    <p className='tool-privacy'>Your text stays in this tab. Nothing is uploaded or saved.</p>
  </section>;
}
