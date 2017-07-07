import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// import App from './App';

import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/routes';

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
