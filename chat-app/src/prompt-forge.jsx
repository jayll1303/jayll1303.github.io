import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  MAX_CONFIG_BYTES, MAX_KEY_LENGTH, MAX_TEMPLATE_LENGTH, MAX_VALUE_LENGTH, MAX_VARIABLES,
  exportPromptConfig, parsePromptConfig, promptExample, renderPrompt, templateParts, variableHue
} from './prompt-forge';
import './prompt-forge.css';
import PromptForgeEditor from './prompt-forge-editor.jsx';

export default function PromptForge() {
  const nextId = useRef(0);
  const withIds = variables => variables.map(variable => ({ ...variable, id: ++nextId.current }));
  const [draft, setDraft] = useState(() => ({ template: promptExample.template, variables: withIds(promptExample.variables) }));
  const [activeTab, setActiveTab] = useState('template');
  const [notice, setNotice] = useState({ text: '', error: false });
  const [importing, setImporting] = useState(false);
  const fileRef = useRef(null);
  const outputRef = useRef(null);
  const templateRef = useRef(null);
  const focusVariableRef = useRef(null);
  const variableListRef = useRef(null);
  const dragId = useRef(null);
  const moveSnapshot = useRef(null);
  const rowAnimations = useRef([]);
  const [dragOverId, setDragOverId] = useState(null);
  const mounted = useRef(true);
  const revision = useRef(0);
  const copyRequest = useRef(0);
  const { template, variables } = draft;
  const rendered = renderPrompt(template, variables);
  const colors = new Map(variables.filter(variable => variable.key.trim()).map(variable => [variable.key.trim(), variableHue(variable.id)]));
  const hasIssues = rendered.issues.some(Boolean);
  const empty = !template && variables.length === 0;
  const status = rendered.error ? 'Preview limit reached' : rendered.missing.length
    ? rendered.missing.length + (rendered.missing.length === 1 ? ' unfilled variable' : ' unfilled variables')
    : hasIssues ? 'Check variable names' : !template ? 'Add a template to begin' : 'Ready to copy';

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; revision.current += 1; copyRequest.current += 1; };
  }, []);
  useEffect(() => {
    if (focusVariableRef.current !== null) {
      document.getElementById('forge-key-' + focusVariableRef.current)?.focus();
      focusVariableRef.current = null;
    }
  }, [variables, activeTab]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const cancel = () => { if (media.matches) rowAnimations.current.forEach(animation => animation.cancel()); };
    media.addEventListener('change', cancel);
    return () => { media.removeEventListener('change', cancel); rowAnimations.current.forEach(animation => animation.cancel()); };
  }, []);
  useLayoutEffect(() => {
    const snapshot = moveSnapshot.current;
    moveSnapshot.current = null;
    if (!snapshot || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const list = variableListRef.current;
    if (!list) return;
    list.scrollTop = snapshot.scrollTop;
    rowAnimations.current = Array.from(list.querySelectorAll('[data-variable-id]')).flatMap(row => {
      const previousTop = snapshot.positions.get(row.dataset.variableId);
      const delta = previousTop - (row.getBoundingClientRect().top + list.scrollTop);
      if (!Number.isFinite(delta) || Math.abs(delta) < 1 || !row.animate) return [];
      return [row.animate([{ transform: 'translateY(' + delta + 'px)' }, { transform: 'translateY(0)' }], {
        duration: 320, easing: 'cubic-bezier(.22,1,.36,1)'
      })];
    });
  }, [variables]);

  function selectTab(tab, focus = false) {
    setActiveTab(tab);
    if (focus) document.getElementById('forge-tab-' + tab)?.focus();
  }
  function tabKeys(event) {
    const tabs = ['template', 'variables'];
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const tab = event.key === 'Home' ? tabs[0] : event.key === 'End' ? tabs[1] : tabs[1 - tabs.indexOf(activeTab)];
    selectTab(tab, true);
  }

  function change(next, message = '') {
    revision.current += 1;
    copyRequest.current += 1;
    setNotice({ text: message, error: false });
    setDraft(next);
  }
  function updateVariable(id, field, value) {
    change(previous => ({ ...previous, variables: previous.variables.map(variable => variable.id === id ? { ...variable, [field]: value } : variable) }));
  }
  function addVariable() {
    if (variables.length >= MAX_VARIABLES) return;
    const id = ++nextId.current;
    setActiveTab('variables');
    focusVariableRef.current = id;
    change(previous => ({ ...previous, variables: [...previous.variables, { id, key: '', value: '' }] }));
  }
  function addDetectedVariables() {
    const known = new Set(variables.map(variable => variable.key.trim()));
    const newKeys = rendered.keys.filter(key => !known.has(key));
    if (!newKeys.length) return;
    if (variables.length + newKeys.length > MAX_VARIABLES || newKeys.some(key => key.length > MAX_KEY_LENGTH || /[\r\n]/.test(key))) {
      setNotice({ text: 'Some placeholders exceed the variable limits. Shorten their names or remove unused variables.', error: true });
      return;
    }
    const additions = withIds(newKeys.map(key => ({ key, value: '' })));
    setActiveTab('variables');
    focusVariableRef.current = additions[0].id;
    change(previous => ({ ...previous, variables: [...previous.variables, ...additions] }), 'Added placeholders as variables. Enter their values below.');
  }
  function moveVariable(id, targetIndex) {
    const from = variables.findIndex(variable => variable.id === id);
    if (from < 0 || targetIndex < 0 || targetIndex >= variables.length || from === targetIndex) return;
    rowAnimations.current.forEach(animation => animation.cancel());
    const list = variableListRef.current;
    if (list) moveSnapshot.current = {
      scrollTop: list.scrollTop,
      positions: new Map(Array.from(list.querySelectorAll('[data-variable-id]'), row => [row.dataset.variableId, row.getBoundingClientRect().top + list.scrollTop]))
    };
    const reordered = [...variables];
    reordered.splice(targetIndex, 0, reordered.splice(from, 1)[0]);
    change({ ...draft, variables: reordered }, 'Variable order updated.');
  }
  function removeVariable(id, index) {
    focusVariableRef.current = variables[index + 1]?.id ?? variables[index - 1]?.id ?? null;
    change(previous => ({ ...previous, variables: previous.variables.filter(variable => variable.id !== id) }), 'Variable removed.');
    if (variables.length === 1) document.getElementById('forge-add')?.focus();
  }
  async function copy() {
    const request = ++copyRequest.current;
    try {
      await navigator.clipboard.writeText(rendered.text);
      if (request === copyRequest.current) setNotice({ text: 'Rendered prompt copied.', error: false });
    } catch {
      if (request !== copyRequest.current) return;
      outputRef.current?.focus();
      outputRef.current?.select();
      setNotice({ text: 'Clipboard unavailable. Prompt selected. Press Ctrl+C or Command+C to copy.', error: false });
    }
  }
  async function importConfig(event) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    const startedAt = revision.current;
    setImporting(true);
    setNotice({ text: '', error: false });
    try {
      if (file.size > MAX_CONFIG_BYTES) throw new Error('Choose a JSON file smaller than 1 MB.');
      const data = parsePromptConfig(await file.text());
      if (!mounted.current) return;
      if (startedAt !== revision.current) {
        setNotice({ text: 'The draft changed while reading the file. Import again to replace it.', error: true });
        return;
      }
      change({ template: data.template, variables: withIds(data.variables) }, 'Configuration imported.');
    } catch (error) {
      if (mounted.current && startedAt === revision.current) setNotice({ text: error.message || 'Could not read this file. Your draft has been kept.', error: true });
    } finally { if (mounted.current) setImporting(false); }
  }
  function exportConfig() {
    let url;
    try {
      const json = exportPromptConfig(template, variables);
      url = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
      const link = document.createElement('a');
      link.href = url;
      link.download = 'prompt-forge-config.json';
      document.body.append(link);
      link.click();
      link.remove();
      setNotice({ text: 'Configuration exported.', error: false });
    } catch (error) { setNotice({ text: error.message || 'Could not export the configuration.', error: true }); }
    finally { if (url) window.setTimeout(() => URL.revokeObjectURL(url), 1000); }
  }
  function clear() {
    setActiveTab('template');
    change({ template: '', variables: [] }, 'Template and variables cleared.');
    requestAnimationFrame(() => templateRef.current?.focus());
  }
  const canDetect = rendered.keys.some(key => !variables.some(variable => variable.key.trim() === key));

  return <section className='tools-page forge-page' aria-labelledby='tools-title'>
    <header className='utility-heading'>
      <span className='utility-eyebrow'>TOOLS</span>
      <h1 id='tools-title'>Prompt Forge</h1>
      <p>One template. Endless variations. Build a prompt with reusable variables.</p>
    </header>
    <div className='tool-toolbar forge-toolbar'>
      <p className='forge-intro'>Use {'{{name}}'} in your template. Each variable has its own color.</p>
      <div className='tool-actions'>
        <input ref={fileRef} type='file' accept='.json,application/json' hidden aria-label='Import Prompt Forge configuration' onChange={importConfig}/>
        <button type='button' onClick={() => fileRef.current?.click()} disabled={importing}>{importing ? 'Importing…' : 'Import JSON'}</button>
        <button type='button' onClick={exportConfig}>Export JSON</button>
        <button type='button' onClick={clear} disabled={empty}>Clear</button>
      </div>
    </div>
    <div className='forge-workspace'>
      <div className='forge-inputs'>
        <div className='forge-tabs' role='tablist' aria-label='Prompt editor' onKeyDown={tabKeys}>
          {['template', 'variables'].map(tab => <button key={tab} id={'forge-tab-' + tab} type='button' role='tab'
            aria-selected={activeTab === tab} aria-controls={'forge-panel-' + tab} tabIndex={activeTab === tab ? 0 : -1}
            onClick={() => selectTab(tab)}>{tab === 'template' ? 'Prompt template' : 'Variables'}{tab === 'variables' && <span className='forge-count'>{variables.length}</span>}</button>)}
        </div>
        <div className='tool-pane forge-template forge-tab-panel' id='forge-panel-template' role='tabpanel' aria-labelledby='forge-tab-template' hidden={activeTab !== 'template'}>
          <div className='tool-pane-heading'>
            <label htmlFor='forge-template'>Prompt template</label>
            <button type='button' onClick={() => change({ template: promptExample.template, variables: withIds(promptExample.variables) }, 'Example loaded.')}>Load example</button>
          </div>
          <PromptForgeEditor parts={templateParts(template)} colors={colors} id='forge-template' ref={templateRef} value={template} maxLength={MAX_TEMPLATE_LENGTH} onChange={event => change(previous => ({ ...previous, template: event.target.value }))} spellCheck={false} placeholder='Write a prompt using {{task}}, {{audience}}, or your own variables…' aria-describedby='forge-template-help'/>
          <div className='tool-pane-footer'><span id='forge-template-help'>Use {'{{name}}'} for a variable</span><span>{template.length.toLocaleString()} characters</span></div>
        </div>
        <section className='tool-pane forge-variables forge-tab-panel' id='forge-panel-variables' role='tabpanel' aria-labelledby='forge-tab-variables' hidden={activeTab !== 'variables'}>
          <div className='tool-pane-heading'>
            <h2 id='forge-variables-title'>Variables <span className='forge-count'>{variables.length}</span></h2>
            <div className='tool-actions'>
              <button type='button' onClick={addDetectedVariables} disabled={!canDetect}>Detect variables</button>
              <button id='forge-add' className='forge-add' type='button' onClick={addVariable} disabled={variables.length >= MAX_VARIABLES}>+ Add</button>
            </div>
          </div>
          <p className='forge-variable-help' id='forge-variable-help'>Names are case-sensitive. Drag the handle or use the arrows to reorder.</p>
          <div className='forge-variable-list' ref={variableListRef}>
            {variables.map((variable, index) => <div key={variable.id} style={{ '--forge-hue': variableHue(variable.id) }} data-variable-id={variable.id} className={'forge-variable' + (dragOverId === variable.id ? ' is-drop-target' : '')}
              onDragOver={event => { if (dragId.current !== null) { event.preventDefault(); event.dataTransfer.dropEffect = 'move'; setDragOverId(variable.id); } }}
              onDrop={event => { event.preventDefault(); if (dragId.current !== null) moveVariable(dragId.current, index); dragId.current = null; setDragOverId(null); }}>
              <span className='forge-drag' draggable aria-hidden='true' title='Drag to reorder' onDragStart={event => { dragId.current = variable.id; event.dataTransfer.effectAllowed = 'move'; event.dataTransfer.setData('text/plain', String(variable.id)); }} onDragEnd={() => { dragId.current = null; setDragOverId(null); }}>⠿</span>
              <div className='forge-variable-fields'>
                <label className='sr-only' htmlFor={'forge-key-' + variable.id}>Variable name {index + 1}</label>
                <input id={'forge-key-' + variable.id} value={variable.key} onChange={event => updateVariable(variable.id, 'key', event.target.value)} placeholder='name' maxLength={MAX_KEY_LENGTH} spellCheck={false} autoCapitalize='off' autoCorrect='off' aria-invalid={Boolean(rendered.issues[index])} aria-describedby={rendered.issues[index] ? 'forge-issue-' + variable.id : 'forge-variable-help'}/>
                <label className='sr-only' htmlFor={'forge-value-' + variable.id}>Variable value {index + 1}</label>
                <textarea id={'forge-value-' + variable.id} value={variable.value} onChange={event => updateVariable(variable.id, 'value', event.target.value)} placeholder='Value…' maxLength={MAX_VALUE_LENGTH} rows={2}/>
                {rendered.issues[index] && <p className='tool-error forge-field-error' id={'forge-issue-' + variable.id}>{rendered.issues[index]}</p>}
              </div>
              <div className='forge-row-actions'>
                <button type='button' aria-label={'Move variable ' + (index + 1) + ' up'} onClick={() => moveVariable(variable.id, index - 1)} disabled={index === 0}>↑</button>
                <button type='button' aria-label={'Move variable ' + (index + 1) + ' down'} onClick={() => moveVariable(variable.id, index + 1)} disabled={index === variables.length - 1}>↓</button>
                <button type='button' className='forge-delete' aria-label={'Delete variable ' + (index + 1)} onClick={() => removeVariable(variable.id, index)}>×</button>
              </div>
            </div>)}
            {!variables.length && <p className='forge-empty'>No variables yet. Add one, or detect placeholders from your template.</p>}
          </div>
        </section>
      </div>
      <div className='forge-result'>
        <div className='tool-pane forge-preview'>
          <div className='tool-pane-heading'><label htmlFor='forge-output'>Rendered prompt</label><button type='button' className='forge-copy' onClick={copy} disabled={!rendered.text}>Copy prompt</button></div>
          <PromptForgeEditor parts={rendered.parts} colors={colors} id='forge-output' ref={outputRef} readOnly value={rendered.text} placeholder='Your prompt will appear here as you type…' spellCheck={false} aria-describedby='forge-output-help'/>
          <div className='tool-pane-footer'><span>Live preview</span><span>{rendered.text.length.toLocaleString()} characters</span></div>
        </div>
        <div className={'forge-completion' + (rendered.error || rendered.missing.length || hasIssues ? ' needs-values' : '')} id='forge-output-help' role='status'>
          <span className='forge-status-dot' aria-hidden='true'/><span>{status}</span>
        </div>
        {rendered.error && <p className='tool-error forge-missing' role='alert'>{rendered.error}</p>}
        {rendered.missing.length > 0 && <p className='forge-missing'>Fill in: {rendered.missing.map(key => '{{' + key + '}}').join(', ')}. Unfilled placeholders stay visible.</p>}
      </div>
    </div>
    <div className='tool-status' aria-live='polite' aria-atomic='true'><p className={notice.error ? 'tool-error' : ''}>{notice.text}</p></div>
    <p className='tool-privacy'>Your prompt stays in this tab. Nothing is uploaded or saved automatically. Export JSON to keep a copy before leaving.</p>
  </section>;
}
