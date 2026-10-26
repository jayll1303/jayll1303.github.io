import React, { useState } from 'react';
import UiIcon from './ui-icon';
import './achievements-library.css';

// Add image records here when they are available:
// { id: 'unique-id', src: '/chat/achievements/image.webp', title: 'Achievement', alt: 'Description of the image', folder: 'Awards', favorite: false, suggested: true }
export const achievementImages = [];

const tabs = ['Suggested', 'Favorites', 'Folders', 'Images', 'All'];

function GridIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true" fill="none"><rect x="2.5" y="2.5" width="6" height="6" rx="1.3"/><rect x="11.5" y="2.5" width="6" height="6" rx="1.3"/><rect x="2.5" y="11.5" width="6" height="6" rx="1.3"/><rect x="11.5" y="11.5" width="6" height="6" rx="1.3"/></svg>;
}

function ListIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true" fill="none"><path d="M7 4.5h10M7 10h10M7 15.5h10"/><circle cx="3.5" cy="4.5" r=".8" fill="currentColor" stroke="none"/><circle cx="3.5" cy="10" r=".8" fill="currentColor" stroke="none"/><circle cx="3.5" cy="15.5" r=".8" fill="currentColor" stroke="none"/></svg>;
}

function ImageCard({ item, layout }) {
  return <a className="achievements-card" href={item.src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${item.title || item.alt || 'image'}`}>
    <img src={item.src} alt={item.alt || item.title || ''} loading="lazy" />
    {layout === 'list' && <span className="achievements-card-copy"><strong>{item.title || item.alt}</strong>{item.folder && <small>{item.folder}</small>}</span>}
  </a>;
}

export default function AchievementsLibrary({ items = achievementImages }) {
  const [tab, setTab] = useState('Suggested');
  const [query, setQuery] = useState('');
  const [layout, setLayout] = useState('grid');
  const search = query.trim().toLocaleLowerCase();
  const matching = items.filter(item => `${item.title || ''} ${item.alt || ''} ${item.folder || ''}`.toLocaleLowerCase().includes(search));
  const suggested = matching.filter(item => item.suggested);
  const visible = tab === 'Favorites' ? matching.filter(item => item.favorite) : tab === 'Suggested' && suggested.length ? suggested : matching;
  const folders = [...new Set(visible.map(item => item.folder).filter(Boolean))];
  const isEmpty = tab === 'Folders' ? folders.length === 0 : visible.length === 0;
  const emptyTitle = search ? 'No matching images' : tab === 'Favorites' ? 'No favorites yet' : tab === 'Folders' ? 'No folders yet' : 'Your achievements will appear here';
  const emptyDescription = search ? 'Try another search term.' : tab === 'Favorites' ? 'Images marked as favorites will appear here.' : tab === 'Folders' ? 'Organized achievement images will appear here.' : 'Images of awards, certificates and milestones will be added to this library.';

  return <section className="achievements-library" aria-labelledby="achievements-library-title">
    <div className="achievements-library-inner">
      <div className="achievements-library-heading">
        <h1 id="achievements-library-title">Library</h1>
        <div className="achievements-library-tools">
          <div className="achievements-layout-switch" role="group" aria-label="View layout">
            <button type="button" className={layout === 'grid' ? 'is-active' : ''} onClick={() => setLayout('grid')} aria-label="Grid view" aria-pressed={layout === 'grid'}><GridIcon /></button>
            <button type="button" className={layout === 'list' ? 'is-active' : ''} onClick={() => setLayout('list')} aria-label="List view" aria-pressed={layout === 'list'}><ListIcon /></button>
          </div>
          <label className="achievements-library-search"><UiIcon name="search" size={17} /><span className="sr-only">Search library</span><input type="search" placeholder="Search library" value={query} onChange={event => setQuery(event.target.value)} /></label>
        </div>
      </div>

      <nav className="achievements-library-tabs" aria-label="Library sections">
        {tabs.map(name => <button type="button" key={name} className={tab === name ? 'is-active' : ''} aria-current={tab === name ? 'page' : undefined} onClick={() => setTab(name)}>{name}</button>)}
      </nav>

      {isEmpty ? <div className="achievements-library-empty" role="status">
        <div className="achievements-empty-mark" aria-hidden="true"><UiIcon name="images" size={31} /></div>
        <h2>{emptyTitle}</h2><p>{emptyDescription}</p>
      </div> : tab === 'Folders' ? <div className="achievements-folder-list">{folders.map(folder => <section key={folder} aria-label={folder}><h2>{folder}</h2><div className={`achievements-gallery achievements-gallery-${layout}`}>{visible.filter(item => item.folder === folder).map(item => <ImageCard key={item.id} item={item} layout={layout} />)}</div></section>)}</div> : <div className={`achievements-gallery achievements-gallery-${layout}`}>{visible.map(item => <ImageCard key={item.id} item={item} layout={layout} />)}</div>}
    </div>
  </section>;
}
