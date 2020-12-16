import React, { useState, useEffect } from "react";
import defaultDataset from './dataset';
import './assets/styles/style.css'
import Chatbot from './components/Chatbot'
import Header from './components/Header'
import ProfileIcon from './assets/img/portfolio_icon.png'

const App: React.FC = () => {
  return (
    <div className='pc-container'>
      <Header />
      <Chatbot />
    </div>
  );
}

export default App;
