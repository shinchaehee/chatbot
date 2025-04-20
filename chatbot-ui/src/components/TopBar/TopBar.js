import React from 'react';
import './TopBar.css';

import logoImg from '../../assets/icons/ect-icon/yongin-white-logo.png';
import menuImg from '../../assets/icons/ect-icon/menu-icon.png';

export default function TopBar({ onMenuClick }) {
  return (
    <div className="top-bar">
      <img src={logoImg} alt="logo" className="full-logo" />
      <img src={menuImg} alt="menu" className="menu-icon" onClick={onMenuClick} />
    </div>
  );
}

