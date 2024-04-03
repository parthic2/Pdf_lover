import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const ads = process.env.NODE_ENV === 'production' &&
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
  />

root.render(
  <>
    {ads && ads}
    <App />
  </>
);
