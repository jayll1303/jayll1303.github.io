import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { achievements, certificates, community, contact, education, experience, projects, skills } from './portfolio-data';
import { entriesForIds, rankEntries } from './portfolio-search';
import ImagesGallery from './images-gallery';
import AchievementsLibrary from './achievements-library';
import ExperienceTimeline from './experience-timeline';
import UiIcon from './ui-icon';
import StreamingText from './streaming-text';
import SidebarProfile from './sidebar-profile';
import AppearanceToggle from './appearance-toggle';
import ProjectVideo from './project-video';
import { projectIconFor } from './project-icon';
import { initPortfolioMotion, closeMotionDialog } from './portfolio-motion';
import './style.css';
import './portfolio-motion.css';
import './appearance.css';

const ProjectCatalog = React.lazy(() => import('./project-catalog'));

const topicLabels = {
  home: 'New chat', images: 'Images', projects: 'Projects', skills: 'Skills', experience: 'Experience', about: 'Who is Jay?',
  approach: 'How I build AI systems', achievements: 'Education & achievements', library: 'Library', contact: 'Contact Jay'
};
const suggestions = [
  {icon:'plugins', title:'Explore the work', description:'Voice AI, GraphRAG, document AI and more', view:{kind:'projects'}},
  {icon:'clock', title:'The story so far', description:'Roles, education and the work behind them', view:{kind:'experience'}},
  {icon:'lightbulb', title:'How I build', description:'Systems, tools and practical engineering', view:{kind:'approach'}},
  {icon:'envelope', title:'Start a conversation', description:'Contact me about something worth building', view:{kind:'contact'}}
];

function viewKey(view) { return view.kind === 'project' ? `project/${view.id}` : view.kind; }
function isCatalogView(view) { return view.kind === 'projects' || view.kind === 'skills'; }
function isFullPageView(view) { return isCatalogView(view) || view.kind === 'images' || view.kind === 'library'; }
function viewFromHash() {
  const raw = decodeURIComponent(window.location.hash.slice(1));
  if (raw.startsWith('project/') && projects.some(project => project.id === raw.slice(8))) return {kind:'project',id:raw.slice(8)};
  if (topicLabels[raw]) return {kind:raw};
  return {kind:'home'};
}
function titleFor(view) { return view.kind === 'project' ? projects.find(project => project.id === view.id)?.title : topicLabels[view.kind]; }

function Icon({name}) {
  const icons = {new:'new-chat',search:'search',images:'images',library:'books',projects:'plugins',experience:'clock',about:'explore'};
  return <span className="nav-icon"><UiIcon name={icons[name]} /></span>;
}

function Followups({items,onOpen}) {
  const iconFor = {projects:'plugins',project:'plugins',experience:'clock',contact:'envelope',about:'explore',achievements:'books',approach:'lightbulb'};
  return <nav className="followups" aria-label="Continue exploring"><span className="followups-label">CONTINUE EXPLORING</span><div className="followups-list">{items.map(item => <button className="followup" key={viewKey(item.view)} onClick={() => onOpen(item.view)}><UiIcon name={iconFor[item.view.kind] || 'explore'} size={16}/><span>{item.label}</span><span className="followup-arrow" aria-hidden="true">→</span></button>)}</div></nav>;
}

function ExternalProjectLink({href,label}) {
  return <a href={href} target="_blank" rel="noopener noreferrer"><span className="project-link-icon"><UiIcon name="open-link" size={17}/></span><span className="project-link-copy"><strong>{label || 'Open project'}</strong><small>{new URL(href).hostname.replace(/^www\./, '')}</small></span><UiIcon name="open-link" size={14} className="project-link-arrow" /></a>;
}

function ProjectCatalogSkeleton({kind}) {
  return <div className="catalog-page catalog-loading" role="status" aria-label={`Loading ${kind}`}><span className="sr-only">Loading {kind}…</span><div className="skeleton-line skeleton-title" aria-hidden="true"/><div className="skeleton-line skeleton-subtitle" aria-hidden="true"/><div className="skeleton-line skeleton-search" aria-hidden="true"/><div className="skeleton-line skeleton-filter" aria-hidden="true"/><div className="skeleton-line skeleton-heading" aria-hidden="true"/><div className="skeleton-grid" aria-hidden="true">{Array.from({length:6},(_,index)=><div className="skeleton-row" key={index}><span/><div><i/><i/></div></div>)}</div></div>;
}

function ProjectDetail({project,onOpen}) {
  const icon = projectIconFor(project.id);
  return <>
    <div className="eyebrow">{project.category.toUpperCase()} <span className="eyebrow-divider">/</span> {project.period}</div>
    <div className="project-title-line">{icon && <span className="project-detail-icon" aria-hidden="true"><img src={icon} alt="" /></span>}<h2>{project.title}</h2></div><p className="lead">{project.summary}</p>
    <div className="context-line"><span className="status-dot" />{project.context}</div>
    {project.video && <ProjectVideo project={project}/>}
    <section className="answer-section"><h3>What I worked on</h3><ul className="detail-list">{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul></section>
    {project.outcome && <section className="outcome-panel"><span>RESULT FROM THE SUPPLIED RÉSUMÉ</span><p>{project.outcome}</p></section>}
    <section className="answer-section"><h3>Tools & technologies</h3><div className="facts">{project.stack.map(item => <span className="fact" key={item}>{item}</span>)}</div></section>
    {(project.link || project.links) && <section className="project-links" aria-label="External project links"><h3>Open project links</h3><div className="link-row">{project.link && <ExternalProjectLink href={project.link} label={project.linkLabel} />}{project.links?.map(link=><ExternalProjectLink key={link.url} href={link.url} label={link.label} />)}</div></section>}
    <Followups onOpen={onOpen} items={[{label:'All projects',view:{kind:'projects'}},{label:'Experience',view:{kind:'experience'}},{label:'Contact Jay',view:{kind:'contact'}}]} />
  </>;
}

function ExperienceAnswer({onOpen}) {
  return <><div className="eyebrow">WORK HISTORY</div><h2>From research to production AI.</h2>
    <p className="lead">My recent work spans knowledge retrieval, voice automation, document intelligence and agent systems.</p>
    <ExperienceTimeline experience={experience} education={education} community={community} />
    <Followups onOpen={onOpen} items={[{label:'See projects',view:{kind:'projects'}},{label:'Education & achievements',view:{kind:'achievements'}}]} />
  </>;
}

function ContactAnswer({onOpen}) {
  const accounts = [
    {label:'Email', value:contact.email, href:`mailto:${contact.email}`},
    {label:'LinkedIn', value:'linkedin.com/in/jayll13', href:contact.linkedin},
    {label:'GitHub', value:'github.com/jayll1303', href:contact.github},
    {label:'Facebook', value:'facebook.com/jayllFA', href:contact.facebook},
    {label:'Zalo', value:'0903 027 947', href:contact.zalo}
  ];
  return <><div className="eyebrow">CONTACT</div><h2>Find me online.</h2><p className="lead">Choose the channel that works best for you.</p><div className="contact-links">{accounts.map(account => <a key={account.label} href={account.href} {...(account.label === 'Email' ? {} : {target:'_blank', rel:'noopener noreferrer'})}><span><strong>{account.label}</strong><small>{account.value}</small></span><UiIcon name="open-link" size={16}/></a>)}</div><Followups onOpen={onOpen} items={[{label:'Explore projects',view:{kind:'projects'}},{label:'My experience',view:{kind:'experience'}}]} /></>;
}

function GeneralAnswer({kind,onOpen}) {
  switch (kind) {
    case 'about': return <><div className="eyebrow">ABOUT JAY</div><h2>Hey, I’m Jay.</h2><p className="lead">I’m Pham Phu Ngoc Trai, an AI engineer based in Ho Chi Minh City.</p><p>I work across voice AI, knowledge retrieval, agents and document intelligence. My current role at FE Credit focuses on enterprise GraphRAG and voice automation. I also build open source and research projects, including VoxCPM-VN and Table2HTML.</p><Followups onOpen={onOpen} items={[{label:'See the work',view:{kind:'projects'}},{label:'My experience',view:{kind:'experience'}},{label:'Get in touch',view:{kind:'contact'}}]} /></>;
    case 'approach': return <><div className="eyebrow">HOW I BUILD</div><h2>Build the system around the model.</h2><p className="lead">The work in my résumé points to three recurring problems: getting useful context, connecting models to workflows, and making the result deployable.</p><div className="principle-grid"><div><span>01</span><h3>Context</h3><p>Graph retrieval, OCR and document pipelines make information usable.</p></div><div><span>02</span><h3>Action</h3><p>Agents, tool calls and business logic turn a response into a workflow.</p></div><div><span>03</span><h3>Delivery</h3><p>APIs, containers, cloud deployment and monitoring make the work usable beyond a demo.</p></div></div><Followups onOpen={onOpen} items={[{label:'GraphRAG project',view:{kind:'project',id:'graph-rag'}},{label:'Voice assistant',view:{kind:'project',id:'alice'}}]} /></>;
    case 'achievements': return <><div className="eyebrow">EDUCATION & ACHIEVEMENTS</div><h2>Curiosity, built into practice.</h2><div className="answer-panel"><h3>{education.school}</h3><p>{education.detail}</p></div><div className="timeline">{achievements.map(item => <div className="timeline-item compact" key={item}>{item}</div>)}</div><section className="answer-section"><h3>Technical skills</h3>{Object.entries(skills).map(([group,items])=><div className="skill-row" key={group}><strong>{group}</strong><div className="facts">{items.map(item=><span className="fact" key={item}>{item}</span>)}</div></div>)}</section><section className="answer-section"><h3>Certificates</h3><ul className="detail-list">{certificates.map(item=><li key={item}>{item}</li>)}</ul></section><Followups onOpen={onOpen} items={[{label:'Research work',view:{kind:'project',id:'antiquities'}},{label:'Experience',view:{kind:'experience'}}]} /></>;
    case 'contact': return <ContactAnswer onOpen={onOpen} />;
    default: return null;
  }
}

function AssistantAnswer({view,onOpen}) {
  if (view.kind === 'local-answer') {
    const vietnamese=/[à-ỹđ]/i.test(view.query);
    return <>
    <div className="eyebrow">{view.mode === 'fallback' ? 'PORTFOLIO SEARCH' : view.mode === 'guide' ? 'PORTFOLIO GUIDE' : 'LOCAL MODEL · ON YOUR DEVICE'}</div>
    {view.answer && (view.mode === 'guide' || view.mode === 'model') && <StreamingText text={view.answer} />}
    {view.status === 'loading' && !view.answer && <p className="search-notice" role="status">{view.progress || 'Searching the résumé…'}</p>}
    {view.status !== 'loading' && view.mode === 'fallback' && <p className="search-notice">{vietnamese ? 'Model trên máy này chưa chạy được. Đây là kết quả tìm trong nội dung portfolio.' : 'The local model could not run here. Showing matches from portfolio text instead.'}</p>}
    {!view.entries?.length && view.mode === 'fallback' && <><h2>{vietnamese ? 'Portfolio hiện chưa có thông tin này.' : 'I don’t have that information here yet.'}</h2><p className="lead">{vietnamese ? 'Thử hỏi về dự án, voice AI, GraphRAG, xử lý tài liệu, kinh nghiệm hoặc liên hệ.' : 'Try asking about projects, voice AI, GraphRAG, document AI, experience or contact.'}</p></>}
    {view.entries?.length ? <><h3 className="source-heading">{vietnamese ? 'Xem thêm trong portfolio' : 'Explore the source records'}</h3><div className="search-match-list">{view.entries.map(entry => <button key={entry.id} onClick={() => onOpen(entry.view)}><span>{entry.id === 'experience' || entry.id === 'contact' || entry.id === 'achievements' ? 'Portfolio' : 'Project'}</span><strong>{entry.title}</strong><small>{entry.summary}</small></button>)}</div></> : null}
  </>;
  }
  if (view.kind === 'search-results') return <><div className="eyebrow">PORTFOLIO SEARCH</div><h2>Results for “{view.query}”</h2><div className="search-match-list">{view.matches.map(project => <button key={project.id} onClick={() => onOpen({kind:'project',id:project.id})}><span>{project.category}</span><strong>{project.title}</strong><small>{project.summary}</small></button>)}</div></>;
  if (view.kind === 'no-results') return <><div className="eyebrow">PORTFOLIO SEARCH</div><h2>I don’t have that here yet.</h2><p className="lead">I found no match for “{view.query}”. Try a project name, a technology, “experience” or “contact”.</p><Followups onOpen={onOpen} items={[{label:'All projects',view:{kind:'projects'}},{label:'About Jay',view:{kind:'about'}}]} /></>;
  if (view.kind === 'project') return <ProjectDetail project={projects.find(project => project.id === view.id)} onOpen={onOpen} />;
  if (view.kind === 'experience') return <ExperienceAnswer onOpen={onOpen} />;
  return <GeneralAnswer kind={view.kind} onOpen={onOpen} />;
}

function SearchDialog({open,onClose,onOpen,onAsk}) {
  const ref = useRef(null);
  const [query,setQuery] = useState('');
  useEffect(() => {if (!open) {setQuery('');return;}const dialog=ref.current;dialog.showModal();dialog.querySelector('input').focus();return () => {if (dialog.open) dialog.close();};},[open]);
  const entries = [
    ...Object.entries(topicLabels).filter(([key]) => key !== 'home').map(([key,label]) => ({key, label,detail:'Portfolio section',view:{kind:key}})),
    ...projects.map(project => ({key:project.id,label:project.title,detail:`${project.category} · ${project.summary}`,searchText:project.stack.join(' '),view:{kind:'project',id:project.id}}))
  ];
  const results=entries.filter(entry => `${entry.label} ${entry.detail} ${entry.searchText||''}`.toLowerCase().includes(query.toLowerCase())).slice(0,12);
  return <dialog ref={ref} className="search-dialog" onCancel={event=>{event.preventDefault();closeMotionDialog(ref.current);}} onClose={onClose}><div className="search-head"><Icon name="search" /><input aria-label="Search portfolio" placeholder="Search projects, skills, experience…" value={query} onChange={event => setQuery(event.target.value)} onKeyDown={event => {if(event.key==='Enter'&&query.trim()){event.preventDefault();onAsk(query.trim());closeMotionDialog(ref.current);}}} /><button onClick={()=>closeMotionDialog(ref.current)} aria-label="Close search">Esc</button></div><div className="search-results">{query.trim()&&<button className="ask-model-result" onClick={()=>{onAsk(query.trim());closeMotionDialog(ref.current);}}><strong>Ask local model: “{query.trim()}”</strong><small>Find relevant work using a small browser model</small></button>}{results.length ? results.map(entry => <button key={entry.key} onClick={() => {onOpen(entry.view);closeMotionDialog(ref.current);}}><strong>{entry.label}</strong><small>{entry.detail}</small></button>) : <p>No direct matches. Ask the local model instead.</p>}</div></dialog>;
}

function App() {
  const [view,setView] = useState(viewFromHash);
  const [messages,setMessages] = useState(() => viewFromHash().kind === 'home' || isFullPageView(viewFromHash()) ? [] : [{question:titleFor(viewFromHash()),view:viewFromHash()}]);
  const [recent,setRecent] = useState([]);
  const [menuOpen,setMenuOpen] = useState(false);
  const [moreOpen,setMoreOpen] = useState(false);
  const [collapsed,setCollapsed] = useState(false);
  const [searchOpen,setSearchOpen] = useState(false);
  const [prompt,setPrompt] = useState('');
  const [toast,setToast] = useState('');
  const conversationRef=useRef(null);
  const promptRef=useRef(null);
  const searchTrigger=useRef(null);
  const moreTrigger=useRef(null);
  const moreMenu=useRef(null);
  const toastTimer=useRef(null);
  const modelWorker=useRef(null);
  const nextRequestId=useRef(0);

  function openView(next,{append=false,question}={}) {
    const label=question || titleFor(next) || 'Explore Jay’s work';
    setView(next);
    setMessages(previous => isFullPageView(next) || next.kind==='home' ? [] : append ? [...previous,{question:label,view:next}] : [{question:label,view:next}]);
    if (next.kind!=='home' && next.kind!=='no-results' && next.kind!=='search-results') setRecent(previous => [next,...previous.filter(item=>viewKey(item)!==viewKey(next))].slice(0,6));
    const hash=next.kind==='home' ? '' : next.kind==='project' ? `#project/${next.id}` : topicLabels[next.kind] ? `#${next.kind}` : '';
    history.pushState(null,'',`${location.pathname}${hash}`);
    setMenuOpen(false);
    setMoreOpen(false);
    setPrompt('');
    requestAnimationFrame(() => {
      const box=conversationRef.current;
      if(!box)return;
      if(!append){box.scrollTop=0;return;}
      const latest=box.querySelector('.message-pair:last-child');
      if(latest)box.scrollTop+=latest.getBoundingClientRect().top-box.getBoundingClientRect().top;
    });
  }
  useEffect(() => {const sync=()=>{const next=viewFromHash();setView(next);setMessages(next.kind==='home'||isFullPageView(next)?[]:[{question:titleFor(next),view:next}]);};window.addEventListener('popstate',sync);window.addEventListener('hashchange',sync);return()=>{window.removeEventListener('popstate',sync);window.removeEventListener('hashchange',sync)};},[]);
  useEffect(() => {document.title=`${view.kind==='home'?'Ask JayLL':titleFor(view)||'Ask JayLL'} · Portfolio`;},[view]);
  useEffect(() => {if(view.kind==='home'&&conversationRef.current)conversationRef.current.scrollTop=0;},[view.kind]);
  useEffect(() => {const key=event=>{if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k'){event.preventDefault();searchTrigger.current=document.activeElement;setSearchOpen(true);}if(event.key==='Escape'){setMenuOpen(false);if(moreOpen){setMoreOpen(false);moreTrigger.current?.focus();}}};document.addEventListener('keydown',key);return()=>document.removeEventListener('keydown',key);},[moreOpen]);
  useEffect(() => {if(!moreOpen)return;const close=event=>{if(!moreMenu.current?.contains(event.target)&&!moreTrigger.current?.contains(event.target))setMoreOpen(false);};document.addEventListener('pointerdown',close);moreMenu.current?.querySelector('button')?.focus();return()=>document.removeEventListener('pointerdown',close);},[moreOpen]);
  useEffect(() => {if(!searchOpen&&searchTrigger.current?.focus){searchTrigger.current.focus();searchTrigger.current=null;}},[searchOpen]);
  useEffect(() => {return()=>clearTimeout(toastTimer.current);},[]);
  useEffect(() => () => modelWorker.current?.terminate(), []);
  useEffect(() => initPortfolioMotion(), []);
  useEffect(() => {
    if (!menuOpen || !matchMedia('(max-width:760px)').matches) return;
    const previous = document.activeElement;
    const sidebar = document.getElementById('sidebar');
    const controls = () => [...sidebar.querySelectorAll('a,button')].filter(item=>item.getClientRects().length);
    controls()[0]?.focus();
    const trap = event => {
      if (event.key !== 'Tab') return;
      const items = controls(), first = items[0], last = items.at(-1);
      if (event.shiftKey && document.activeElement===first) { event.preventDefault();last?.focus(); }
      else if (!event.shiftKey && document.activeElement===last) { event.preventDefault();first?.focus(); }
    };
    document.addEventListener('keydown',trap);
    return () => { document.removeEventListener('keydown',trap);previous?.focus(); };
  }, [menuOpen]);
  function notify(message){setToast(message);clearTimeout(toastTimer.current);toastTimer.current=setTimeout(()=>setToast(''),3500);}
  function askPortfolio(text) {
    const requestId=++nextRequestId.current;
    const fallback=()=>rankEntries(text);
    openView({kind:'local-answer',query:text,requestId,status:'loading',progress:'Starting the local model…'}, {append:messages.length>0&&!isFullPageView(view),question:text});
    const update=changes=>setMessages(previous=>previous.map(message=>message.view.requestId===requestId ? {...message,view:{...message.view,...changes}} : message));
    try {
      if (!modelWorker.current) {
        modelWorker.current=new Worker(new URL('./local-model-worker.js',import.meta.url),{type:'module'});
        modelWorker.current.onmessage=({data})=>{
          if (data.type==='progress') updateForRequest(data.requestId,{progress:data.message});
          if (data.type==='preview') updateForRequest(data.requestId,{mode:'guide',answer:data.answer,entries:entriesForIds(data.ids)});
          if (data.type==='result') updateForRequest(data.requestId,{status:'done',mode:data.source==='guide'?'guide':'model',answer:data.answer,entries:entriesForIds(data.ids)});
          if (data.type==='error') updateForRequest(data.requestId,{status:'done',mode:'fallback',entries:rankEntries(requestQuestions.current.get(data.requestId)||'')});
        };
        modelWorker.current.onerror=()=>{
          for (const [id,question] of requestQuestions.current) updateForRequest(id,{status:'done',mode:'fallback',entries:rankEntries(question)});
          modelWorker.current?.terminate();modelWorker.current=null;
        };
      }
      requestQuestions.current.set(requestId,text);
      modelWorker.current.postMessage({requestId,question:text});
    } catch {
      update({status:'done',mode:'fallback',entries:fallback()});
    }
  }
  const requestQuestions=useRef(new Map());
  function updateForRequest(requestId,changes) {
    setMessages(previous=>previous.map(message=>message.view.requestId===requestId ? {...message,view:{...message.view,...changes}} : message));
    if(changes.status==='done')requestQuestions.current.delete(requestId);
  }
  function submit(event){event.preventDefault();const text=prompt.trim();if(!text)return;askPortfolio(text);}
  async function share(){try{await navigator.clipboard.writeText(location.href);notify('Link copied to clipboard.');}catch{notify(`Copy this URL: ${location.href}`);}}
  const catalogOpen=isCatalogView(view);
  const galleryOpen=view.kind==='images'||view.kind==='library';
  const fullPageOpen=isFullPageView(view);
  const navButton=(label,next,icon)=> <button className={`nav-action ${viewKey(view)===viewKey(next)?'active':''}`} key={viewKey(next)} onClick={()=>openView(next)}><Icon name={icon}/><span>{label}</span></button>;
  return <><a className="skip-link" href="#main" onClick={event=>{event.preventDefault();document.getElementById('main').focus();}}>Skip to content</a><div className={`app-shell ${collapsed?'collapsed':''} ${menuOpen?'menu-open':''}`}>
    <aside className="sidebar" id="sidebar" aria-label="Portfolio navigation">
      <div className="sidebar-top"><a className="brand" href="/" onClick={event=>{event.preventDefault();openView({kind:'home'});}}>JayLL</a><button className="icon-button sidebar-search" onClick={()=>{searchTrigger.current=document.activeElement;setSearchOpen(true);setMenuOpen(false);}} aria-label="Search portfolio"><Icon name="search"/></button><button className="icon-button desktop-collapse" onClick={()=>setCollapsed(true)} aria-label="Collapse sidebar"><UiIcon name="sidebar" size={16}/></button><button className="icon-button mobile-close" onClick={()=>setMenuOpen(false)} aria-label="Close sidebar"><span className="studio-menu-icon" aria-hidden="true"><i/><i/></span></button></div>
      <nav className="sidebar-nav" aria-label="Quick navigation"><button className="nav-action" onClick={()=>openView({kind:'home'})}><Icon name="new"/><span>New chat</span></button>{navButton('Images',{kind:'images'},'images')}{navButton('Experience',{kind:'experience'},'experience')}{navButton('Library',{kind:'library'},'library')}{navButton('Projects',{kind:'projects'},'projects')}{navButton('Explore',{kind:'about'},'about')}</nav>
      <div className="sidebar-scroll"><div className="nav-group recent"><p className="nav-heading">Recents</p>{recent.length>0 ? recent.map(item=><button className="nav-topic" key={viewKey(item)} onClick={()=>openView(item)}>{titleFor(item)}</button>) : <p className="empty-recent">No recent chats</p>}</div></div>
      <div className="sidebar-bottom"><button className="sidebar-file" onClick={()=>openView({kind:'experience'})}><span className="file-icon"><UiIcon name="document"/></span><span><strong>Experience & CV details</strong><small>Updated from Jay’s résumé</small></span></button><AppearanceToggle/><SidebarProfile/></div>
    </aside>
    {menuOpen&&<button className="scrim" aria-label="Close navigation" onClick={()=>setMenuOpen(false)} />}
    <div className="main-shell"><header className={`topbar ${catalogOpen?'catalog-topbar':''} ${galleryOpen?'gallery-topbar':''}`}><div className="top-left"><button className="icon-button mobile-menu" onClick={()=>setMenuOpen(true)} aria-label="Open sidebar" aria-expanded={menuOpen}><span className="studio-menu-icon" aria-hidden="true"><i/><i/></span></button>{collapsed&&<button className="icon-button reopen" onClick={()=>setCollapsed(false)} aria-label="Open sidebar"><UiIcon name="sidebar-hidden" size={16}/></button>}{catalogOpen?<nav className="catalog-tabs" aria-label="Browse portfolio"><button className={view.kind==='projects'?'active':''} aria-current={view.kind==='projects'?'page':undefined} onClick={()=>openView({kind:'projects'})}>Projects</button><button className={view.kind==='skills'?'active':''} aria-current={view.kind==='skills'?'page':undefined} onClick={()=>openView({kind:'skills'})}>Skills</button></nav>:galleryOpen?null:<button className="model-button" onClick={()=>notify('Local portfolio model loads when you ask a question.')}>JayLL <span className="chevron"><UiIcon name="chevron-down" size={16}/></span></button>}</div><div className="top-right">{catalogOpen?<button className="catalog-contact" onClick={()=>openView({kind:'contact'})}>Contact <UiIcon name="open-link" size={14}/></button>:galleryOpen?null:<><button ref={moreTrigger} className="icon-button more-button" onClick={()=>setMoreOpen(open=>!open)} aria-label="More options" aria-expanded={moreOpen} aria-controls="more-options" title="More options"><UiIcon name="more"/></button>{moreOpen&&<div id="more-options" ref={moreMenu} className="more-menu" aria-label="More options"><button onClick={()=>openView({kind:'about'})}>About Jay</button><button onClick={()=>openView({kind:'experience'})}>Work history</button><button onClick={()=>openView({kind:'projects'})}>Projects</button><button onClick={()=>openView({kind:'contact'})}>Contact</button></div>}<button className="share-button" onClick={share} aria-label="Share this view" title="Share this view"><UiIcon name="share" size={16}/><span>Share</span></button></>}</div></header>
      <main id="main" className={`main-content ${fullPageOpen?'catalog-main':''}`} tabIndex="-1">{fullPageOpen?<div className="catalog-scroll" key={view.kind}>{catalogOpen?<React.Suspense fallback={<ProjectCatalogSkeleton kind={view.kind} />}><ProjectCatalog key={view.kind} kind={view.kind} onOpen={openView}/></React.Suspense>:view.kind==='images'?<ImagesGallery/>:<AchievementsLibrary/>}</div>:<><div className="conversation" ref={conversationRef} aria-live="polite">{messages.length===0?<section className="welcome"><span className="welcome-glyph" aria-hidden="true">✳</span><h1><span className="studio-heading-part">What would you like</span>{' '}<span className="studio-heading-part">to know about Jay?</span></h1><p className="welcome-sub studio-tagline" data-word-reveal><span className="sr-only">Explore the work, the systems behind it, and the path that brought me here. Start anywhere.</span><span aria-hidden="true">{['Explore the work,', 'the systems behind it,', 'and the path that brought me here.', 'Start anywhere.'].map((line,index)=><React.Fragment key={line}>{index>0 && ' '}{line.split(' ').map((word,i)=><React.Fragment key={i}><span className="studio-word">{word}</span>{' '}</React.Fragment>)}{index===1 && <br/>}</React.Fragment>)}</span></p><div className="suggestions">{suggestions.map(item=><button key={item.title} className="suggestion" onClick={()=>openView(item.view)}><span className="s-icon"><UiIcon name={item.icon}/></span><strong>{item.title}</strong><span>{item.description}</span></button>)}</div><p className="welcome-footnote">Currently at FE Credit · Building voice and retrieval systems</p></section>:<div className="thread">{messages.map((message,index)=><div className="message-pair" key={`${index}-${viewKey(message.view)}`}><div className="message user-message"><div className="user-bubble">{message.question}</div></div><article className="message assistant-message"><div className="assistant-head"><span className="assistant-logo" aria-hidden="true">✳</span><span>JayLL</span></div><AssistantAnswer view={message.view} onOpen={next=>openView(next,{append:true})}/></article></div>)}</div>}</div>
        <div className="composer-zone"><form className={`composer ${prompt.trim()?'has-prompt':''}`} onSubmit={submit}><div className="composer-tools"><button type="button" className="attach-button" onClick={()=>openView({kind:'experience'})} aria-label="Explore CV details" title="Explore CV details"><UiIcon name="plus" size={16}/></button></div><label className="sr-only" htmlFor="prompt">Ask about Jay’s portfolio</label><textarea id="prompt" ref={promptRef} rows="1" value={prompt} onChange={event=>setPrompt(event.target.value)} onKeyDown={event=>{if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();event.currentTarget.form.requestSubmit();}}} placeholder="Ask JayLL"/><button className="send-button" type="submit" aria-label="Ask portfolio" disabled={!prompt.trim()}><UiIcon name="send" size={20}/></button></form><p className="composer-note">Small local model downloads on first question. Answers point to portfolio records.</p></div></>}
      </main></div></div>
    <SearchDialog open={searchOpen} onClose={()=>setSearchOpen(false)} onOpen={openView} onAsk={askPortfolio}/>
    <div className={`toast ${toast?'show':''}`} role="status" aria-live="polite">{toast}</div>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
