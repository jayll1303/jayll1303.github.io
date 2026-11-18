import React, { forwardRef, useLayoutEffect, useRef } from 'react';

// Native textareas keep selection, undo, IME and copying; the mirror supplies color.
const PromptForgeEditor = forwardRef(function PromptForgeEditor({ parts, colors, value, className = '', ...props }, ref) {
  const inputRef = useRef(null);
  const mirrorRef = useRef(null);
  const syncScroll = () => {
    if (!inputRef.current || !mirrorRef.current) return;
    mirrorRef.current.scrollTop = inputRef.current.scrollTop;
    mirrorRef.current.scrollLeft = inputRef.current.scrollLeft;
  };
  useLayoutEffect(syncScroll, [value]);
  return <div className={'forge-code-editor ' + className}>
    <pre className='forge-code-mirror' aria-hidden='true' ref={mirrorRef}>
      {parts.map((part, index) => <span key={index}
        className={part.key && colors.has(part.key) ? 'forge-token forge-token-' + part.kind : undefined}
        style={part.key && colors.has(part.key) ? { '--forge-hue': colors.get(part.key) } : undefined}
        title={part.key || undefined}>{part.text}</span>)}
      <span>{'\u200b'}</span>
    </pre>
    <textarea {...props} className='forge-code-input' value={value} ref={node => {
      inputRef.current = node;
      if (typeof ref === 'function') ref(node);
      else if (ref) ref.current = node;
    }} onScroll={syncScroll}/>
  </div>;
});

export default PromptForgeEditor;
