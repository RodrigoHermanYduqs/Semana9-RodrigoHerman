import React from 'react';
//import ReactDOM from 'react-dom'; //versão 17?
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);



/*
versão 17??
ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
