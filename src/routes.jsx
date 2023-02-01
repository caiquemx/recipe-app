import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Details from './pages/Details';

export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/details"
          element={<Details />}
        />
        <Route
          path="/details/:id"
          element={<Details />}
        />
      </Routes>
    </BrowserRouter>
  );
}
