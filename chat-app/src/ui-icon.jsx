import React from 'react';
import iconSprite from './gpt-ui-icons.svg';

export default function UiIcon({ name, size = 20, className = '' }) {
  return <svg className={`ui-icon ${className}`} width={size} height={size} aria-hidden="true" focusable="false" fill="currentColor">
    <use href={`${iconSprite}#${name}`} />
  </svg>;
}
