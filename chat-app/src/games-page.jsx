import React from 'react';
import enBacPreview from './games-assets/en-bac-flight.png';
import './games-page.css';

export default function GamesPage() {
  return <div className='catalog-page games-catalog'>
    <div className='catalog-intro'>
      <h1>Games</h1>
      <p>Games to play in your browser.</p>
    </div>
    <section className='catalog-section games-section' aria-labelledby='games-available'>
      <h2 id='games-available'>Available games <span aria-hidden='true'>›</span></h2>
      <div className='catalog-grid games-grid'>
        <a className='catalog-row games-row' href='/games/ace7/'>
          <span className='games-row-art' aria-hidden='true'>
            <img src={enBacPreview} alt='' />
          </span>
          <div className='catalog-row-copy games-row-copy'>
            <strong>Én Bạc: Bầu trời quê hương</strong>
            <span>Game không chiến 3D. Bay MiG-21 qua bảy nhiệm vụ chiến dịch.</span>
            <small>Three.js · Web game · Chuột, bàn phím và cảm ứng</small>
          </div>
          <span className='catalog-row-arrow' aria-hidden='true'>↗</span>
        </a>
      </div>
    </section>
  </div>;
}
