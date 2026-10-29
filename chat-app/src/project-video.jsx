import React, { useId } from 'react';
import UiIcon from './ui-icon';
import './project-video.css';

export default function ProjectVideo({ project }) {
  const headingId = useId();
  const { video } = project;
  if (!video) return null;
  return <section className="project-video" aria-labelledby={headingId}>
    <header><div><span className="project-video-eyebrow">{project.title} · {video.channel}</span><h3 className="project-video-title" id={headingId}>Vietnamese voice cloning, in action.</h3></div><a href={`https://www.youtube.com/watch?v=${video.youtubeId}`} target="_blank" rel="noopener noreferrer">Watch on YouTube <UiIcon name="open-link" size={16}/></a></header>
    <iframe src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?playsinline=1&rel=0`} title={video.title} loading="lazy" width="864" height="486" referrerPolicy="strict-origin-when-cross-origin" allow="encrypted-media; picture-in-picture; fullscreen; web-share" allowFullScreen />
  </section>;
}
