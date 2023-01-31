import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app.js';
import ProductFetching from './components/fetching';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ProductFetching />
  </React.StrictMode>
);

