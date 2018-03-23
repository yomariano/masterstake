console.log(`I'm a silly entry point`);

import React from 'react'
import { render } from 'react-dom'
// import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import font from './assets/css/font-awesome.min.css'
import css from './assets/css/main.css';


render((
    // <BrowserRouter>
      <App />
    // </BrowserRouter>
  ), document.getElementById('root'));

