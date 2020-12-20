import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // URLが変わったとき（画面遷移したとき）スクロールの位置を先頭まで戻す
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

ReactDOM.render(
  <React.StrictMode>
    <ScrollToTop />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
