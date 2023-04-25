import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const ads = process.env.NODE_ENV === 'production' &&
//   <script
//     async
//     src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
//   />

root.render(
  <Provider store={store}>
    {/* {ads && ads} */}
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
