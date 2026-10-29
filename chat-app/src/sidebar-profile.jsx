import React, { useState } from 'react';
import avatar from './profile-assets/jayll-avatar.jpg';
import './sidebar-profile.css';

export default function SidebarProfile() {
  const [failed, setFailed] = useState(false);
  return <div className="profile">
    <span className="avatar">{failed ? 'J' : <img src={avatar} alt="" width="32" height="32" decoding="async" onError={() => setFailed(true)} />}</span>
    <span className="profile-copy"><strong>Pham Phu Ngoc Trai</strong><small>AI engineer & builder</small></span>
  </div>;
}
