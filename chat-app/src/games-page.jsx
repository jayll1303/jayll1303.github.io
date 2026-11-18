import React from 'react';
import './tools-page.css';

export default function GamesPage() {
  return <section className='games-page' aria-labelledby='games-title'><header className='utility-heading'><span className='utility-eyebrow'>A LITTLE ROOM TO PLAY</span><h1 id='games-title'>Games</h1><p>A break between the things you build.</p></header><div className='games-empty'><div className='games-mark' aria-hidden='true'><svg width='48' height='48' viewBox='0 0 48 48' fill='none' stroke='currentColor' strokeWidth='1.5'><path d='M17 15h14c5 0 7 4 8 10l1 7c.6 4-3 6-6 3l-5-5H19l-5 5c-3 3-6.6 1-6-3l1-7c1-6 3-10 8-10Z'/><path d='M17 20v9m-4.5-4.5h9'/><circle cx='30' cy='22' r='1'/><circle cx='34' cy='26' r='1'/></svg></div><span className='games-badge'>IN THE WORKS</span><h2>Good things take a little play.</h2><p>Small games for a quick reset.<br/>Coming soon.</p></div></section>;
}
