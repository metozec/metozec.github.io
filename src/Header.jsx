import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Microcosm</div>
      <nav>
        <ul className="nav-list">
          <li><a href="/troubleshooting">Troubleshooting</a></li>
          <li><a href="/algorithm-notes">Algorithm Notes</a></li>
          <li><a href="/personal-memo">Personal Memo</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;