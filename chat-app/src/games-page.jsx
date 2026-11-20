import React, { useRef, useState } from 'react';
import enBacPreview from './games-assets/en-bac-flight.png';
import trapPreview from './games-assets/trap-o-matic.svg';
import './games-page.css';

export default function GamesPage() {
  const [trapOpen, setTrapOpen] = useState(false);
  const [playerStatus, setPlayerStatus] = useState('');
  const trapPlayer = useRef(null);
  async function openFullscreen() {
    try {
      await trapPlayer.current.requestFullscreen();
      setPlayerStatus('');
    } catch {
      setPlayerStatus('Không mở được toàn màn hình. Bạn vẫn có thể chơi trong khung bên dưới.');
    }
  }
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
        <button className='catalog-row games-row games-launch' type='button' aria-expanded={trapOpen} aria-controls='trap-player-section' onClick={() => setTrapOpen(open => !open)}>
          <span className='games-row-art' aria-hidden='true'>
            <img src={trapPreview} alt='' />
          </span>
          <span className='catalog-row-copy games-row-copy'>
            <strong>Tom’s Trap-o-Matic</strong>
            <span>Mèo Tom đặt bẫy. Xếp đồ vật thành chuỗi phản ứng để bắt Jerry.</span>
            <small>Flash cổ điển · Internet Archive · Chơi bằng chuột</small>
          </span>
          <span className='catalog-row-arrow' aria-hidden='true'>{trapOpen ? '−' : '▷'}</span>
        </button>
        <section id='trap-player-section' className='games-embed' aria-label='Chơi Tom’s Trap-o-Matic' hidden={!trapOpen}>
          {trapOpen && <>
            <div className='games-embed-toolbar'>
              <p>Chọn phòng → kéo thả đồ vật → xoay và nối các mũi tên → thử bẫy.</p>
              {document.fullscreenEnabled && <button type='button' onClick={openFullscreen}>Toàn màn hình</button>}
            </div>
            <div className='games-embed-player' ref={trapPlayer}>
              <iframe src='https://archive.org/embed/toms_trap-o-matic' title='Chơi Tom’s Trap-o-Matic trên Internet Archive' width='600' height='400' allow='autoplay; fullscreen' allowFullScreen />
            </div>
            {playerStatus && <p role='status'>{playerStatus}</p>}
            <p>Chờ khung tải xong rồi bấm nút bắt đầu. Nếu chưa có phản hồi, chờ một chút rồi thử lại. Nên chơi bằng chuột; cảm ứng chưa được xác minh.</p>
            <p>Khung không tải được? <a href='https://archive.org/details/toms_trap-o-matic' target='_blank' rel='noopener noreferrer'>Mở trên Internet Archive ↗</a></p>
            <p className='games-embed-credit'>Game: Ham in the Fridge / Cartoon Network, theo bản lưu Internet Archive. Game và nhân vật thuộc chủ sở hữu tương ứng.</p>
          </>}
        </section>
      </div>
    </section>
  </div>;
}
