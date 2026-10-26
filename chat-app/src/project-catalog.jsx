import React, { useState } from 'react';
import { categories, projects, skills } from './portfolio-data';
import UiIcon from './ui-icon';
import './project-icons.css';

const iconFiles = import.meta.glob(['./project-icons/*.svg', './project-icons/*.png'], { eager: true, query: '?url', import: 'default' });

function ProjectRow({ project, onOpen }) {
  const icon = iconFiles[`./project-icons/${project.id}.svg`] || iconFiles[`./project-icons/${project.id}.png`];
  return <button className="catalog-row" type="button" onClick={() => onOpen({ kind: 'project', id: project.id })}>
    <span className="catalog-icon catalog-project-icon" aria-hidden="true"><img src={icon} alt="" /></span>
    <span className="catalog-row-copy"><strong>{project.title}</strong><span>{project.summary}</span><small>{project.category} · {project.context}</small></span>
    <span className="catalog-row-arrow"><UiIcon name="open-link" size={16}/></span>
  </button>;
}

function ProjectSection({ title, items, onOpen }) {
  if (!items.length) return null;
  return <section className="catalog-section" aria-label={title}>
    <h2>{title} <span aria-hidden="true">›</span></h2>
    <div className="catalog-grid">{items.map(project => <ProjectRow key={project.id} project={project} onOpen={onOpen} />)}</div>
  </section>;
}

export default function ProjectCatalog({ kind, onOpen }) {
  const [query, setQuery] = useState('');
  const [scope, setScope] = useState('all');
  const [category, setCategory] = useState('All');
  const isSkills = kind === 'skills';
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const shown = projects.filter(project =>
    (scope === 'all' || project.context.toLowerCase().includes('open source')) &&
    (category === 'All' || project.category === category) &&
    `${project.title} ${project.summary} ${project.category} ${project.context} ${project.stack.join(' ')}`.toLocaleLowerCase().includes(normalizedQuery)
  );
  const skillGroups = Object.entries(skills).map(([group, items]) => ({
    group,
    items: items.filter(item => `${group} ${item}`.toLocaleLowerCase().includes(normalizedQuery))
  })).filter(group => group.items.length);

  return <div className="catalog-page">
    <div className="catalog-intro"><h1>{isSkills ? 'Skills' : 'Projects'}</h1><p>{isSkills ? 'The tools behind the systems I build' : 'Explore the products, systems and research I’ve built'}</p></div>
    <label className="catalog-search"><UiIcon name="search" size={16}/><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={isSkills ? 'Search skills' : 'Search projects'} aria-label={isSkills ? 'Search skills' : 'Search projects'} /></label>
    {isSkills ? <div className="catalog-skills">
      {skillGroups.length ? skillGroups.map(({ group, items }) => <section className="catalog-section" key={group} aria-label={group}><h2>{group} <span aria-hidden="true">›</span></h2><div className="catalog-grid">{items.map(item => <div className="catalog-row catalog-skill" key={item}><span className="catalog-icon catalog-icon-skill" aria-hidden="true">✦</span><span className="catalog-row-copy"><strong>{item}</strong><small>{group}</small></span></div>)}</div></section>) : <p className="catalog-empty" role="status">No skills match “{query}”.</p>}
    </div> : <>
      <div className="catalog-filters" aria-label="Filter projects"><div className="catalog-scope"><button type="button" className={scope === 'all' ? 'selected' : ''} aria-pressed={scope === 'all'} onClick={() => setScope('all')}>All</button><button type="button" className={scope === 'open-source' ? 'selected' : ''} aria-pressed={scope === 'open-source'} onClick={() => setScope('open-source')}>Open source</button></div><label className="catalog-category-label">Category <select value={category} onChange={event => setCategory(event.target.value)}>{categories.map(item => <option key={item}>{item}</option>)}</select></label></div>
      <div role="status" className="catalog-count">{shown.length} {shown.length === 1 ? 'project' : 'projects'}</div>
      {shown.length ? normalizedQuery ? <ProjectSection title="Results" items={shown} onOpen={onOpen} /> : <><ProjectSection title="Featured" items={shown.filter(project => project.featured)} onOpen={onOpen} /><ProjectSection title="More projects" items={shown.filter(project => !project.featured)} onOpen={onOpen} /></> : <p className="catalog-empty">No projects match these filters.</p>}
    </>}
  </div>;
}
