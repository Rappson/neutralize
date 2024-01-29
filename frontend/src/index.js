import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/Header';
import Home from './components/articles/home';
import Footer from './components/footer/footer.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
