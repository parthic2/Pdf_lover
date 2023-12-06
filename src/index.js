import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));

const ads = process.env.NODE_ENV === 'production' &&
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
  />

root.render(
  <Provider store={store}>
    {ads && ads}
    <App />
  </Provider>
);
