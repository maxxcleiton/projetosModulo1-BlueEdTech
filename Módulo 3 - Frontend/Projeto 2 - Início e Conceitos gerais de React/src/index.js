import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/main.css';
import Home from './views/Home/Home';
import PaletaLista from './components/PaletaLista/PaletaLista';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);