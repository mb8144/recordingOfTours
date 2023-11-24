import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';


/* When using createRoot: "signal is aborted..." after fetching data */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


/* 
That's how it was in the tutorial:
  ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */