import React from 'react';
import '../styles/header.css';

export default function Header() {
  return (
    <header className="header">
      <img
        alt="profile-avatar"
        className="avatar-picture"
        src=""
      />
      <h1 className="page-title">TITLE</h1>
      <input
        className="search-input"
        id="search"
        name="search"
        type="text"
      />
    </header>
  );
}
