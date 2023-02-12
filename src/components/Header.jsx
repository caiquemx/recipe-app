import React, {useContext} from 'react';
import {mealContext} from '../context';

export default function Header({pageTitle}) {
  const {data} = useContext(mealContext);

  return (
    <header className="header">
      <img
        alt="profile-avatar"
        className="avatar-picture"
        src={`https://www.gravatar.com/avatar/${data.email}`}
      />
      <h1 className="page-title">{pageTitle || 'TITLE'}</h1>
      <input
        className="search-input"
        id="search"
        name="search"
        type="text"
      />
    </header>
  );
}
