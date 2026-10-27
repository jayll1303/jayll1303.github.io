import React, { useEffect, useRef, useState } from 'react';

export default function StreamingText({ text }) {
  const words = text.match(/\S+\s*/g) || [];
  const [visibleWords, setVisibleWords] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches ? Infinity : 0);
  const hasStreamed = useRef(false);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (hasStreamed.current || motion.matches) {
      setVisibleWords(words.length);
      return;
    }

    hasStreamed.current = true;
    const duration = Math.min(850, Math.max(220, words.length * 28));
    let frame;
    let start;
    const reveal = now => {
      start ??= now;
      const progress = Math.min(1, (now - start) / duration);
      setVisibleWords(Math.min(words.length, Math.ceil(progress * words.length)));
      if (progress < 1) frame = requestAnimationFrame(reveal);
    };
    const finish = () => {
      if (motion.matches) {
        cancelAnimationFrame(frame);
        setVisibleWords(words.length);
      }
    };
    motion.addEventListener('change', finish);
    frame = requestAnimationFrame(reveal);
    return () => {
      cancelAnimationFrame(frame);
      motion.removeEventListener('change', finish);
    };
  }, [text]);

  return <p className="lead local-model-answer streaming-text"><span className="sr-only">{text}</span><span aria-hidden="true">{words.slice(0, visibleWords).join('')}{visibleWords < words.length && <span className="streaming-caret" />}</span></p>;
}
