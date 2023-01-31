import React from 'react';
import ReactDOM from 'react-dom/client';
import {MealProvider} from './context/';
import Routes from './routes';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes>
      <MealProvider>
        <App />
      </MealProvider>
    </Routes>
  </React.StrictMode>
);
