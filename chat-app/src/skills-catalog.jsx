import React from 'react';
import { projects } from './portfolio-data';
import { filterSkillGroups } from './skills-data';
import UiIcon from './ui-icon';
import './skills-catalog.css';

export default function SkillsCatalog({ query }) {
  const groups = filterSkillGroups(query, projects);
  const count = groups.reduce((total, group) => total + group.items.length, 0);
  return <div className="skills-catalog">
    <div className="skills-summary" role="status">{count} {count === 1 ? 'skill' : 'skills'} · {groups.length} {groups.length === 1 ? 'area' : 'areas'}</div>
    <p className="skills-provenance">Each skill links to work where I used it. Public code and product links are listed where available; internal work is documented in the portfolio’s résumé records.</p>
    {groups.length ? groups.map(group => <section className="skills-group" key={group.title} aria-label={group.title}>
      <h2>{group.title}<span>{String(group.items.length).padStart(2, '0')}</span></h2>
      <div>{group.items.map(skill => <article className="skills-entry" key={skill.id} aria-labelledby={`skill-${skill.id}`}>
        <div className="skills-copy">
          <h3 id={`skill-${skill.id}`}>{skill.title}</h3>
          <p>{skill.description}</p>
          <ul className="skills-tools" aria-label="Technologies used">{skill.tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
        </div>
        <div className="skills-evidence"><span className="skills-evidence-label">Applied in</span><ul>{skill.references.map(reference => {
          const project = projects.find(item => item.id === reference.projectId);
          return <li key={reference.projectId}>
            <a className="skills-project-link" href={`#project/${project.id}`}><span>{project.title}</span><span aria-hidden="true">→</span></a>
            {reference.url ? <a className="skills-source-link" href={reference.url} target="_blank" rel="noopener noreferrer" aria-label={`${reference.basis} for ${project.title} (opens in a new tab)`}>{reference.basis}<UiIcon name="open-link" size={12}/></a> : <span className="skills-source-label">{reference.basis}</span>}
          </li>;
        })}</ul></div>
      </article>)}</div>
    </section>) : <div className="skills-empty"><p>No skills match “{query}”.</p><p>Try a technology, capability or project name, such as Python, OCR or Pondie.</p></div>}
  </div>;
}
