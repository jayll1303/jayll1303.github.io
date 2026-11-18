import React, { useState } from 'react';
import avatar from './profile-assets/jayll-avatar.jpg';
import './sidebar-profile.css';

export default function SidebarProfile() {
  const [failed, setFailed] = useState(false);
  return <a className="profile" href="/resume/resume.pdf" download="Pham-Phu-Ngoc-Trai-Resume.pdf" aria-label="Download Pham Phu Ngoc Trai resume (PDF)">
    <span className="avatar">{failed ? 'J' : <img src={avatar} alt="" width="32" height="32" decoding="async" onError={() => setFailed(true)} />}</span>
    <span className="profile-copy"><strong>Pham Phu Ngoc Trai</strong><small className="profile-role">AI engineer & builder</small><small className="profile-download">Download resume · PDF</small></span>
  <svg className="profile-download-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12m-4-4 4 4 4-4M5 16v4h14v-4"/></svg></a>;
}
