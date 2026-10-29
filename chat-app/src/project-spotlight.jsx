import React from 'react';
import { projects } from './portfolio-data';
import { projectIconFor } from './project-icon';
import UiIcon from './ui-icon';
import './project-spotlight.css';

const lead = projects.find(project => project.id === 'tiengnoi');
const supporting = ['pondie-tab', 'winv-panel-tweaks', 'coin-stock-monitor']
  .map(id => projects.find(project => project.id === id));
const waveHeights = [8,16,24,16,32,48,24,16,32,48,32,16,24,48,32,16,8,16,24,16,8];

export default function ProjectSpotlight({ onOpen }) {
  const open = project => onOpen({ kind: 'project', id: project.id });
  return <section className="product-spotlight" aria-labelledby="spotlight-heading">
    <header className="spotlight-header"><div><span className="spotlight-eyebrow">Selected products</span><h2 id="spotlight-heading">A voice for every idea.</h2></div><p>Voice AI, a browser companion,<br/>{' '}and a better desktop.</p></header>
    <button className="spotlight-hero" type="button" onClick={() => open(lead)} aria-label="Explore TiengNoi project">
      <span className="spotlight-copy"><span className="spotlight-identity"><img src={projectIconFor(lead.id)} alt="" width="40" height="40"/><span>Vietnamese voice AI</span></span><span className="spotlight-title">Your words.<br/>Your voice.</span><span className="spotlight-description">{lead.summary}</span><span className="spotlight-action">Explore TiengNoi <UiIcon name="open-link" size={16}/></span></span>
      <span className="spotlight-art" aria-hidden="true"><span className="spotlight-voice-panel"><span className="spotlight-voice-top"><img src={projectIconFor(lead.id)} alt="" width="24" height="24"/><span>TiengNoi</span><span>Voice studio</span></span><span className="spotlight-quote">Biến ý tưởng<br/>thành giọng nói.</span><span className="spotlight-wave">{waveHeights.map((height,index) => <i key={index} style={{ height }} />)}</span><span className="spotlight-voice-bottom"><span>Vietnamese voice AI</span><span className="spotlight-voice-mark"><UiIcon name="mic" size={16}/></span></span></span></span>
    </button>
    <div className="spotlight-supporting">{supporting.map(project => <button className="spotlight-card" type="button" key={project.id} onClick={() => open(project)} aria-label={`Explore ${project.title} project`}><span className="spotlight-card-heading"><img src={projectIconFor(project.id)} alt="" width="32" height="32"/><span><strong>{project.id === 'pondie-tab' ? 'Pondie Tab' : project.title}</strong><small>{project.context.split(' · ')[0]}</small></span><UiIcon name="open-link" size={16}/></span><span className="spotlight-card-description">{project.summary}</span></button>)}</div>
    <p className="spotlight-note">Voice interface illustration.</p>
  </section>;
}
