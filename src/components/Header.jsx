import React, {useContext} from 'react';
import {mealContext} from '../context';

export default function Header({pageTitle}) {
  const {data} = useContext(mealContext);

  return (
    <header className="fixed top-0 bg-blue-400 h-1/8 w-screen flex flex-row items-center justify-around text-center font-mono  tracking-widest shadow-md">
      <img
        alt="profile-avatar"
        className="w-1/8 rounded-md"
        src={`https://www.gravatar.com/avatar/${data.email}`}
      />
      <h1 className="w-1/2 font-bold text-3xl">{pageTitle || 'TITLE'}</h1>
      <input
        className="flex focus:before:content-['🔎'] rounded-md p-2 w-1/6 "
        id="search"
        name="search"
        placeholder="🔎"
        type="text"
      />
    </header>
  );
}
