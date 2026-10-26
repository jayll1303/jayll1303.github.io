import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { achievements, categories, certificates, community, contact, education, experience, projects, skills } from './portfolio-data';
import './style.css';

const featured = projects.filter(project => project.featured);
const topicLabels = {
  home: 'New chat', projects: 'All projects', experience: 'Experience', about: 'Who is Jay?',
  approach: 'How I build AI systems', achievements: 'Education & achievements', library: 'Library', contact: 'Contact Jay'
};
const suggestions = [
  {icon:'✦', title:'Explore the work', description:'Voice AI, GraphRAG, document AI and more', view:{kind:'projects'}},
  {icon:'◷', title:'The story so far', description:'Roles, education and the work behind them', view:{kind:'experience'}},
  {icon:'⌘', title:'How I build', description:'Systems, tools and practical engineering', view:{kind:'approach'}},
  {icon:'✉', title:'Start a conversation', description:'Contact me about something worth building', view:{kind:'contact'}}
];

function viewKey(view) { return view.kind === 'project' ? `project/${view.id}` : view.kind; }
function viewFromHash() {
  const raw = decodeURIComponent(window.location.hash.slice(1));
  if (raw.startsWith('project/') && projects.some(project => project.id === raw.slice(8))) return {kind:'project',id:raw.slice(8)};
  if (topicLabels[raw]) return {kind:raw};
  return {kind:'home'};
}
function titleFor(view) { return view.kind === 'project' ? projects.find(project => project.id === view.id)?.title : topicLabels[view.kind]; }

function Icon({name}) {
  const icons = {new:'✎',search:'⌕',library:'▦',projects:'▤',experience:'◷',about:'◉',approach:'⌘',achievements:'✧',contact:'↗',menu:'☰'};
  return <span className="nav-icon" aria-hidden="true">{icons[name] || '✦'}</span>;
}

function ProjectCard({project, onOpen}) {
  return <article className="project-card">
    <div className="project-card-top"><span className="project-category">{project.category}</span><span className="project-arrow" aria-hidden="true">↗</span></div>
    <h3>{project.title}</h3><p>{project.summary}</p>
    <div className="project-card-bottom"><span>{project.context}</span><button type="button" onClick={() => onOpen({kind:'project',id:project.id})} aria-label={`Explore ${project.title}`}>Explore</button></div>
  </article>;
}

function Followups({items,onOpen}) {
  return <div className="followups">{items.map(item => <button className="followup" key={viewKey(item.view)} onClick={() => onOpen(item.view)}>{item.label}<span aria-hidden="true">↗</span></button>)}</div>;
}

function ProjectDetail({project,onOpen}) {
  return <>
    <div className="eyebrow">{project.category.toUpperCase()} <span className="eyebrow-divider">/</span> {project.period}</div>
    <h2>{project.title}</h2><p className="lead">{project.summary}</p>
    <div className="context-line"><span className="status-dot" />{project.context}</div>
    <section className="answer-section"><h3>What I worked on</h3><ul className="detail-list">{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul></section>
    {project.outcome && <section className="outcome-panel"><span>RESULT FROM THE SUPPLIED RÉSUMÉ</span><p>{project.outcome}</p></section>}
    <section className="answer-section"><h3>Tools & technologies</h3><div className="facts">{project.stack.map(item => <span className="fact" key={item}>{item}</span>)}</div></section>
    {(project.link || project.links) && <div className="link-row">{project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">{project.linkLabel} ↗</a>}{project.links?.map(link=><a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">{link.label} ↗</a>)}</div>}
    <Followups onOpen={onOpen} items={[{label:'All projects',view:{kind:'projects'}},{label:'Experience',view:{kind:'experience'}},{label:'Contact Jay',view:{kind:'contact'}}]} />
  </>;
}

function ProjectsAnswer({onOpen}) {
  const [category,setCategory] = useState('All');
  const shown = category === 'All' ? projects : projects.filter(project => project.category === category);
  return <><div className="eyebrow">SELECTED WORK <span className="eyebrow-divider">/</span> {projects.length} PROJECTS</div>
    <h2>Things I’ve built.</h2><p className="lead">A collection of enterprise AI systems, open source experiments and research from my work so far.</p>
    <div className="category-tabs" aria-label="Filter projects">{categories.map(item => <button key={item} className={item === category ? 'selected' : ''} onClick={() => setCategory(item)} aria-pressed={item === category}>{item}</button>)}</div>
    <div className="project-grid">{shown.map(project => <ProjectCard key={project.id} project={project} onOpen={onOpen} />)}</div>
    <Followups onOpen={onOpen} items={[{label:'My experience',view:{kind:'experience'}},{label:'How I build',view:{kind:'approach'}}]} />
  </>;
}

function ExperienceAnswer({onOpen}) {
  return <><div className="eyebrow">WORK HISTORY</div><h2>From research to production AI.</h2>
    <p className="lead">My recent work spans knowledge retrieval, voice automation, document intelligence and agent systems.</p>
    <div className="timeline">{experience.map(item => <article className="timeline-item" key={item.role+item.place}><span>{item.period}</span><h3>{item.role}</h3><strong>{item.place}</strong><p>{item.detail}</p></article>)}</div>
    <div className="answer-panel"><h3>Education</h3><p><strong>{education.school}</strong> · {education.detail}</p></div>
    <div className="answer-panel"><h3>Community</h3><p><strong>{community.role}</strong> · {community.place} · {community.period}</p><p>{community.detail}</p></div>
    <Followups onOpen={onOpen} items={[{label:'See projects',view:{kind:'projects'}},{label:'Education & achievements',view:{kind:'achievements'}}]} />
  </>;
}

function GeneralAnswer({kind,onOpen}) {
  switch (kind) {
    case 'about': return <><div className="eyebrow">ABOUT JAY</div><h2>Hey, I’m Jay.</h2><p className="lead">I’m Pham Phu Ngoc Trai, an AI engineer based in Ho Chi Minh City.</p><p>I work across voice AI, knowledge retrieval, agents and document intelligence. My current role at FE Credit focuses on enterprise GraphRAG and voice automation. I also build open source and research projects, including VoxCPM-VN and Table2HTML.</p><Followups onOpen={onOpen} items={[{label:'See the work',view:{kind:'projects'}},{label:'My experience',view:{kind:'experience'}},{label:'Get in touch',view:{kind:'contact'}}]} /></>;
    case 'approach': return <><div className="eyebrow">HOW I BUILD</div><h2>Build the system around the model.</h2><p className="lead">The work in my résumé points to three recurring problems: getting useful context, connecting models to workflows, and making the result deployable.</p><div className="principle-grid"><div><span>01</span><h3>Context</h3><p>Graph retrieval, OCR and document pipelines make information usable.</p></div><div><span>02</span><h3>Action</h3><p>Agents, tool calls and business logic turn a response into a workflow.</p></div><div><span>03</span><h3>Delivery</h3><p>APIs, containers, cloud deployment and monitoring make the work usable beyond a demo.</p></div></div><Followups onOpen={onOpen} items={[{label:'GraphRAG project',view:{kind:'project',id:'graph-rag'}},{label:'Voice assistant',view:{kind:'project',id:'alice'}}]} /></>;
    case 'achievements': return <><div className="eyebrow">EDUCATION & ACHIEVEMENTS</div><h2>Curiosity, built into practice.</h2><div className="answer-panel"><h3>{education.school}</h3><p>{education.detail}</p></div><div className="timeline">{achievements.map(item => <div className="timeline-item compact" key={item}>{item}</div>)}</div><section className="answer-section"><h3>Technical skills</h3>{Object.entries(skills).map(([group,items])=><div className="skill-row" key={group}><strong>{group}</strong><div className="facts">{items.map(item=><span className="fact" key={item}>{item}</span>)}</div></div>)}</section><section className="answer-section"><h3>Certificates</h3><ul className="detail-list">{certificates.map(item=><li key={item}>{item}</li>)}</ul></section><Followups onOpen={onOpen} items={[{label:'Research work',view:{kind:'project',id:'antiquities'}},{label:'Experience',view:{kind:'experience'}}]} /></>;
    case 'library': return <><div className="eyebrow">LIBRARY</div><h2>Experiments beyond work.</h2><p className="lead">The existing image prompt collection is a place to explore visual ideas, inspect previews and copy prompts.</p><div className="library-preview"><img src="/prompts/images/optimized/shot-with-the-robot.webp" alt="Robot themed image from Jay's prompt collection" loading="lazy" /><div><span>IMAGE PROMPT COLLECTION</span><h3>Ideas worth trying.</h3><p>Browse the gallery by category or search for a specific image.</p><a href="/prompts/">Open the library ↗</a></div></div><Followups onOpen={onOpen} items={[{label:'See projects',view:{kind:'projects'}},{label:'Who is Jay?',view:{kind:'about'}}]} /></>;
    case 'contact': return <><div className="eyebrow">CONTACT</div><h2>Tell me what you’re building.</h2><p className="lead">Send a short note about the problem, the workflow and what a useful result would look like.</p><div className="contact-card"><span>DIRECT LINE</span><a href={`mailto:${contact.email}`}>{contact.email} ↗</a><p>For code and open source work, find me on GitHub.</p><a className="secondary-link" href={contact.github} target="_blank" rel="noopener noreferrer">GitHub profile ↗</a></div><Followups onOpen={onOpen} items={[{label:'Explore projects',view:{kind:'projects'}},{label:'My experience',view:{kind:'experience'}}]} /></>;
    default: return null;
  }
}

function AssistantAnswer({view,onOpen}) {
  if (view.kind === 'search-results') return <><div className="eyebrow">PORTFOLIO SEARCH</div><h2>Results for “{view.query}”</h2><div className="search-match-list">{view.matches.map(project => <button key={project.id} onClick={() => onOpen({kind:'project',id:project.id})}><span>{project.category}</span><strong>{project.title}</strong><small>{project.summary}</small></button>)}</div></>;
  if (view.kind === 'no-results') return <><div className="eyebrow">PORTFOLIO SEARCH</div><h2>I don’t have that here yet.</h2><p className="lead">I found no match for “{view.query}”. Try a project name, a technology, “experience” or “contact”.</p><Followups onOpen={onOpen} items={[{label:'All projects',view:{kind:'projects'}},{label:'About Jay',view:{kind:'about'}}]} /></>;
  if (view.kind === 'project') return <ProjectDetail project={projects.find(project => project.id === view.id)} onOpen={onOpen} />;
  if (view.kind === 'projects') return <ProjectsAnswer onOpen={onOpen} />;
  if (view.kind === 'experience') return <ExperienceAnswer onOpen={onOpen} />;
  return <GeneralAnswer kind={view.kind} onOpen={onOpen} />;
}

function SearchDialog({open,onClose,onOpen}) {
  const ref = useRef(null);
  const [query,setQuery] = useState('');
  useEffect(() => {if (!open) {setQuery('');return;}const dialog=ref.current;dialog.showModal();dialog.querySelector('input').focus();return () => {if (dialog.open) dialog.close();};},[open]);
  const entries = [
    ...Object.entries(topicLabels).filter(([key]) => key !== 'home').map(([key,label]) => ({key, label,detail:'Portfolio section',view:{kind:key}})),
    ...projects.map(project => ({key:project.id,label:project.title,detail:`${project.category} · ${project.summary}`,searchText:project.stack.join(' '),view:{kind:'project',id:project.id}}))
  ];
  const results=entries.filter(entry => `${entry.label} ${entry.detail} ${entry.searchText||''}`.toLowerCase().includes(query.toLowerCase())).slice(0,12);
  return <dialog ref={ref} className="search-dialog" onClose={onClose}><div className="search-head"><Icon name="search" /><input aria-label="Search portfolio" placeholder="Search projects, skills, experience…" value={query} onChange={event => setQuery(event.target.value)} onKeyDown={event => {if(event.key==='Enter'&&results[0]){event.preventDefault();onOpen(results[0].view);onClose();}}} /><button onClick={onClose} aria-label="Close search">Esc</button></div><div className="search-results">{results.length ? results.map(entry => <button key={entry.key} onClick={() => {onOpen(entry.view);onClose();}}><strong>{entry.label}</strong><small>{entry.detail}</small></button>) : <p>No matches. Try a project name or technology.</p>}</div></dialog>;
}

function classifyQuery(text) {
  const query=text.trim().toLowerCase();
  const lookup=[
    [/contact|email|liên hệ|hợp tác|thuê/, 'contact'],
    [/experience|kinh nghiệm|worked|career|fpt|fe credit|quá trình/, 'experience'],
    [/education|university|scholarship|award|học|giải thưởng/, 'achievements'],
    [/library|prompt|image|ảnh/, 'library'],
    [/approach|cách làm|how.*build|architecture|kiến trúc|workflow/, 'approach'],
    [/about|who|giới thiệu|bạn là ai/, 'about'],
    [/project|dự án|work|portfolio|sản phẩm/, 'projects']
  ];
  const direct=projects.find(project => query.includes(project.title.toLowerCase()) || query.includes(project.id.replaceAll('-',' ')));
  if(direct)return {kind:'project',id:direct.id};
  const exact=lookup.find(([pattern]) => pattern.test(query));
  if(exact)return {kind:exact[1]};
  const words=query.split(/\s+/).filter(word=>word.length>2);
  const matches=projects.filter(project => words.some(word => `${project.title} ${project.category} ${project.summary} ${project.stack.join(' ')}`.toLowerCase().includes(word)));
  if(matches.length===1)return {kind:'project',id:matches[0].id};
  if(matches.length>1)return {kind:'search-results',query:text,matches};
  return {kind:'no-results',query:text};
}

function App() {
  const [view,setView] = useState(viewFromHash);
  const [messages,setMessages] = useState(() => viewFromHash().kind === 'home' ? [] : [{question:titleFor(viewFromHash()),view:viewFromHash()}]);
  const [recent,setRecent] = useState([]);
  const [menuOpen,setMenuOpen] = useState(false);
  const [collapsed,setCollapsed] = useState(false);
  const [searchOpen,setSearchOpen] = useState(false);
  const [prompt,setPrompt] = useState('');
  const [toast,setToast] = useState('');
  const conversationRef=useRef(null);
  const promptRef=useRef(null);
  const searchTrigger=useRef(null);
  const toastTimer=useRef(null);

  function openView(next,{append=false,question}={}) {
    const label=question || titleFor(next) || 'Explore Jay’s work';
    setView(next);
    setMessages(previous => append ? [...previous,{question:label,view:next}] : next.kind==='home' ? [] : [{question:label,view:next}]);
    if (next.kind!=='home' && next.kind!=='no-results' && next.kind!=='search-results') setRecent(previous => [next,...previous.filter(item=>viewKey(item)!==viewKey(next))].slice(0,6));
    const hash=next.kind==='home' ? '' : next.kind==='project' ? `#project/${next.id}` : topicLabels[next.kind] ? `#${next.kind}` : '';
    history.pushState(null,'',`${location.pathname}${hash}`);
    setMenuOpen(false);
    setPrompt('');
    requestAnimationFrame(() => {
      const box=conversationRef.current;
      if(!box)return;
      if(!append){box.scrollTop=0;return;}
      const latest=box.querySelector('.message-pair:last-child');
      if(latest)box.scrollTop+=latest.getBoundingClientRect().top-box.getBoundingClientRect().top;
    });
  }
  useEffect(() => {const sync=()=>{const next=viewFromHash();setView(next);setMessages(next.kind==='home'?[]:[{question:titleFor(next),view:next}]);};window.addEventListener('popstate',sync);window.addEventListener('hashchange',sync);return()=>{window.removeEventListener('popstate',sync);window.removeEventListener('hashchange',sync)};},[]);
  useEffect(() => {document.title=`${view.kind==='home'?'Ask JayLL':titleFor(view)||'Ask JayLL'} · Portfolio`;},[view]);
  useEffect(() => {if(view.kind==='home'&&conversationRef.current)conversationRef.current.scrollTop=0;},[view.kind]);
  useEffect(() => {const key=event=>{if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k'){event.preventDefault();searchTrigger.current=document.activeElement;setSearchOpen(true);}if(event.key==='Escape')setMenuOpen(false);};document.addEventListener('keydown',key);return()=>document.removeEventListener('keydown',key);},[]);
  useEffect(() => {if(!searchOpen&&searchTrigger.current?.focus){searchTrigger.current.focus();searchTrigger.current=null;}},[searchOpen]);
  useEffect(() => {return()=>clearTimeout(toastTimer.current);},[]);
  function notify(message){setToast(message);clearTimeout(toastTimer.current);toastTimer.current=setTimeout(()=>setToast(''),3500);}
  function submit(event){event.preventDefault();const text=prompt.trim();if(!text)return;openView(classifyQuery(text),{append:messages.length>0,question:text});}
  async function share(){try{await navigator.clipboard.writeText(location.href);notify('Link copied to clipboard.');}catch{notify(`Copy this URL: ${location.href}`);}}
  const navButton=(label,next,icon)=> <button className={`nav-action ${viewKey(view)===viewKey(next)?'active':''}`} key={viewKey(next)} onClick={()=>openView(next)}><Icon name={icon}/><span>{label}</span></button>;
  return <><a className="skip-link" href="#main" onClick={event=>{event.preventDefault();document.getElementById('main').focus();}}>Skip to conversation</a><div className={`app-shell ${collapsed?'collapsed':''} ${menuOpen?'menu-open':''}`}>
    <aside className="sidebar" id="sidebar" aria-label="Portfolio navigation">
      <div className="sidebar-top"><a className="brand" href="/chat/" onClick={event=>{event.preventDefault();openView({kind:'home'});}}><span className="brand-symbol">✳</span><span>JayLL</span><span className="brand-label">portfolio</span></a><button className="icon-button desktop-collapse" onClick={()=>setCollapsed(true)} aria-label="Collapse sidebar">☷</button><button className="icon-button mobile-close" onClick={()=>setMenuOpen(false)} aria-label="Close sidebar">×</button></div>
      <nav className="sidebar-nav" aria-label="Quick navigation"><button className="nav-action" onClick={()=>openView({kind:'home'})}><Icon name="new"/><span>New chat</span></button><button className="nav-action" onClick={()=>{searchTrigger.current=document.activeElement;setSearchOpen(true);setMenuOpen(false);}}><Icon name="search"/><span>Search chats</span><kbd>Ctrl K</kbd></button>{navButton('Library',{kind:'library'},'library')}</nav>
      <div className="sidebar-scroll"><div className="nav-group"><p className="nav-heading">PROJECTS</p>{navButton('All projects',{kind:'projects'},'projects')}{featured.map(project => <button className={`nav-topic ${view.kind==='project'&&view.id===project.id?'active':''}`} key={project.id} onClick={()=>openView({kind:'project',id:project.id})}>{project.title}</button>)}</div>
        <div className="nav-group"><p className="nav-heading">EXPLORE JAY</p>{[['Who is Jay?','about'],['Experience','experience'],['How I build','approach'],['Education & achievements','achievements'],['Contact','contact']].map(([label,kind]) => <button className={`nav-topic ${view.kind===kind?'active':''}`} key={kind} onClick={()=>openView({kind})}>{label}</button>)}</div>
        {recent.length>0&&<div className="nav-group recent"><p className="nav-heading">RECENT THIS VISIT</p>{recent.map(item=><button className="nav-topic" key={viewKey(item)} onClick={()=>openView(item)}>{titleFor(item)}</button>)}</div>}</div>
      <div className="sidebar-bottom"><button className="sidebar-file" onClick={()=>openView({kind:'experience'})}><span className="file-icon">▤</span><span><strong>Experience & CV details</strong><small>Updated from Jay’s résumé</small></span></button><div className="profile"><span className="avatar">J</span><span><strong>Pham Phu Ngoc Trai</strong><small>AI engineer & builder</small></span></div></div>
    </aside>
    {menuOpen&&<button className="scrim" aria-label="Close navigation" onClick={()=>setMenuOpen(false)} />}
    <div className="main-shell"><header className="topbar"><div className="top-left"><button className="icon-button mobile-menu" onClick={()=>setMenuOpen(true)} aria-label="Open sidebar" aria-expanded={menuOpen}>☰</button>{collapsed&&<button className="icon-button reopen" onClick={()=>setCollapsed(false)} aria-label="Open sidebar">☰</button>}<button className="model-button" onClick={()=>notify('Explore the portfolio through curated content and search.')}>JayLL <span className="chevron">⌄</span></button></div><div className="top-right"><span className="preview-pill">PORTFOLIO PREVIEW</span><button className="icon-button" onClick={share} aria-label="Share this view" title="Share this view">↗</button></div></header>
      <main id="main" className="main-content" tabIndex="-1"><div className="conversation" ref={conversationRef} aria-live="polite">{messages.length===0?<section className="welcome"><span className="welcome-glyph" aria-hidden="true">✳</span><h1>What would you like to know about Jay?</h1><p className="welcome-sub">Explore the work, the systems behind it, and the path that brought me here. Start anywhere.</p><div className="suggestions">{suggestions.map(item=><button key={item.title} className="suggestion" onClick={()=>openView(item.view)}><span className="s-icon" aria-hidden="true">{item.icon}</span><strong>{item.title}</strong><span>{item.description}</span></button>)}</div><p className="welcome-footnote">Currently at FE Credit · Building voice and retrieval systems</p></section>:<div className="thread">{messages.map((message,index)=><div className="message-pair" key={`${index}-${viewKey(message.view)}`}><div className="message user-message"><div className="user-bubble">{message.question}</div></div><article className="message assistant-message"><div className="assistant-head"><span className="assistant-logo" aria-hidden="true">✳</span><span>JayLL</span></div><AssistantAnswer view={message.view} onOpen={next=>openView(next,{append:true})}/></article></div>)}</div>}</div>
        <div className="composer-zone"><form className="composer" onSubmit={submit}><label className="sr-only" htmlFor="prompt">Search Jay’s portfolio</label><textarea id="prompt" ref={promptRef} rows="1" value={prompt} onChange={event=>setPrompt(event.target.value)} onKeyDown={event=>{if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();event.currentTarget.form.requestSubmit();}}} placeholder="Ask about a project, skill or experience…"/><div className="composer-tools"><button type="button" className="attach-button" onClick={()=>openView({kind:'experience'})} aria-label="Explore CV details" title="Explore CV details">＋</button><span className="composer-mode">Explore JayLL <span>⌄</span></span><button className="send-button" type="submit" aria-label="Search portfolio">↑</button></div></form><p className="composer-note">Searches curated portfolio content. No AI service or account required.</p></div>
      </main></div></div>
    <SearchDialog open={searchOpen} onClose={()=>setSearchOpen(false)} onOpen={openView}/>
    <div className={`toast ${toast?'show':''}`} role="status" aria-live="polite">{toast}</div>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
