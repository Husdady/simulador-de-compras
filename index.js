import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import Header from './components/header/Header.js';
import App from './components/main/App.js'; 
import Footer from './components/footer/Footer.js';
import reportWebVitals from './reportWebVitals'; 

const main = document.getElementsByTagName('main')[0];

ReactDOM.render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>,
  main
);

reportWebVitals();