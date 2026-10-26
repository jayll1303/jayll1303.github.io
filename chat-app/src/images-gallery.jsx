import React, { useEffect, useRef, useState } from 'react';
import './images-gallery.css';

const ROOT = '/prompts/data/';
const IMAGE_ROOT = '/prompts/';
const COLLECTION_LABELS = { avatar: 'Portraits', couples: 'Couples' };
const isLocalPath = (value, prefix) => typeof value === 'string' && value.startsWith(prefix) && !value.includes('..') && !value.includes('://');
const promptCache = new Map();

async function loadPrompt(item) {
  if (!promptCache.has(item.key)) {
    const pending = fetch(ROOT + item.promptFile).then(response => {
      if (!response.ok) throw new Error('Prompt unavailable');
      return response.text();
    });
    promptCache.set(item.key, pending);
  }
  try { return await promptCache.get(item.key); }
  catch (error) { promptCache.delete(item.key); throw error; }
}

function PromptDialog({ item, onClose }) {
  const dialogRef = useRef(null);
  const [prompt, setPrompt] = useState('');
  const [loadState, setLoadState] = useState('loading');
  const [copyState, setCopyState] = useState('idle');
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog.showModal();
    return () => { if (dialog.open) dialog.close(); };
  }, []);

  useEffect(() => {
    let active = true;
    setLoadState('loading');
    loadPrompt(item).then(text => {
      if (!active) return;
      setPrompt(text);
      setLoadState('ready');
    }).catch(() => { if (active) setLoadState('error'); });
    return () => { active = false; };
  }, [item, retry]);

  async function copy() {
    setCopyState('copying');
    try {
      await navigator.clipboard.writeText(prompt);
      setCopyState('copied');
    } catch { setCopyState('error'); }
  }

  return <dialog ref={dialogRef} className="images-dialog" onClose={onClose} onClick={event => { if (event.target === dialogRef.current) dialogRef.current.close(); }} aria-labelledby="images-dialog-title">
    <div className="images-dialog-content">
      <button type="button" className="images-close" aria-label="Close image details" onClick={() => dialogRef.current.close()}>×</button>
      <div className="images-dialog-image"><img src={IMAGE_ROOT + item.imageUrl} alt={`Example for ${item.title}`} /></div>
      <div className="images-dialog-details">
        <span className="images-dialog-category">{COLLECTION_LABELS[item.collection] || item.collection}</span>
        <h2 id="images-dialog-title">{item.title}</h2>
        <h3>Prompt</h3>
        {loadState === 'loading' && <p role="status">Loading prompt…</p>}
        {loadState === 'error' && <div role="alert"><p>This prompt could not be loaded.</p><button type="button" className="images-retry" onClick={() => setRetry(value => value + 1)}>Try again</button></div>}
        {loadState === 'ready' && <p className="images-prompt-text">{prompt}</p>}
        <button type="button" className="images-copy" disabled={loadState !== 'ready' || copyState === 'copying'} onClick={copy}>{copyState === 'copied' ? 'Copied' : copyState === 'copying' ? 'Copying…' : 'Copy prompt'}</button>
        {copyState === 'error' && <p className="images-copy-error" role="alert">Could not copy. Select the prompt text and copy it manually.</p>}
      </div>
    </div>
  </dialog>;
}

export default function ImagesGallery() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('loading');
  const [collection, setCollection] = useState('all');
  const [selected, setSelected] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [retry, setRetry] = useState(0);
  const lastTrigger = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      setStatus('loading');
      try {
        const indexResponse = await fetch(ROOT + 'index.json', { signal: controller.signal });
        if (!indexResponse.ok) throw new Error('Collection unavailable');
        const index = await indexResponse.json();
        if (!Array.isArray(index.collections)) throw new Error('Invalid index');
        const names = index.collections.filter(name => typeof name === 'string' && /^[a-z0-9_-]+$/i.test(name));
        const results = await Promise.allSettled(names.map(async name => {
          const response = await fetch(ROOT + name + '.json', { signal: controller.signal });
          if (!response.ok) throw new Error('Collection unavailable');
          const entries = await response.json();
          if (!Array.isArray(entries)) throw new Error('Invalid collection');
          return entries.filter(entry => entry.id && entry.title && isLocalPath(entry.imageUrl, 'images/') && isLocalPath(entry.promptFile, 'prompts/'))
            .map(entry => ({ ...entry, key: `${name}:${entry.id}`, collection: name }));
        }));
        if (controller.signal.aborted) return;
        const available = results.flatMap(result => result.status === 'fulfilled' ? result.value : []);
        setItems(available);
        setStatus(results.some(result => result.status === 'rejected') ? available.length ? 'partial' : 'error' : 'ready');
      } catch {
        if (!controller.signal.aborted) setStatus('error');
      }
    }
    load();
    return () => controller.abort();
  }, [retry]);

  useEffect(() => { if (searchOpen) searchRef.current?.focus(); }, [searchOpen]);
  function closeDetail() { setSelected(null); requestAnimationFrame(() => lastTrigger.current?.focus()); }
  const visible = items.filter(item => (collection === 'all' || item.collection === collection) && (!query.trim() || item.title.toLowerCase().includes(query.trim().toLowerCase())));
  const collections = [...new Set(items.map(item => item.collection))];

  return <section className="images-page" aria-labelledby="images-heading">
    <div className="images-page-inner">
      <div className="images-page-header"><h1 id="images-heading">Images</h1><button type="button" className="images-search-toggle" aria-label={searchOpen ? 'Close image search' : 'Search images'} aria-expanded={searchOpen} onClick={() => { setSearchOpen(open => !open); setQuery(''); }}>{searchOpen ? '×' : <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.6" /><path d="m16 16 5 5" /></svg>}</button></div>
      <div className="images-tabs" role="group" aria-label="Image collections"><button type="button" className={collection === 'all' ? 'selected' : ''} aria-pressed={collection === 'all'} onClick={() => setCollection('all')}>All images</button>{collections.map(name => <button type="button" key={name} className={collection === name ? 'selected' : ''} aria-pressed={collection === name} onClick={() => setCollection(name)}>{COLLECTION_LABELS[name] || name}</button>)}</div>
      {searchOpen && <label className="images-search"><span className="images-visually-hidden">Search image titles</span><input ref={searchRef} type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search images" /></label>}
      {status === 'loading' && <p className="images-state" role="status">Loading images…</p>}
      {(status === 'error' || status === 'partial') && <div className="images-state" role={status === 'error' ? 'alert' : 'status'}><p>{status === 'error' ? 'The image collection could not be loaded.' : 'Some images could not be loaded.'}</p><button type="button" className="images-retry" onClick={() => setRetry(value => value + 1)}>Try again</button></div>}
      {status !== 'loading' && status !== 'error' && (visible.length ? <div className="images-grid">{visible.map((item, index) => <button type="button" className="images-tile" key={item.key} onClick={event => { lastTrigger.current = event.currentTarget; setSelected(item); }} aria-label={`View ${item.title} prompt`}><img src={IMAGE_ROOT + item.imageUrl} alt="" loading={index < 10 ? 'eager' : 'lazy'} /><span>{item.title}</span></button>)}</div> : <div className="images-state" role="status"><p>No images match your search.</p><button type="button" className="images-retry" onClick={() => { setCollection('all'); setQuery(''); }}>Clear filters</button></div>)}
    </div>
    {selected && <PromptDialog item={selected} onClose={closeDetail} />}
  </section>;
}
