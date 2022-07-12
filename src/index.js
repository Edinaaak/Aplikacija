import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<link rel="manifest" href="%PUBLIC_URL%/manifest.json"></link>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

