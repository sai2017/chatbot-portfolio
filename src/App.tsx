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
        <div className='first-view-wrap'>
          <img src={ProfileIcon} className='profile-icon' />
          <div className='first-view-name'>HIROAKI SASAKI</div>
          <div className='first-view-portfolio'>PORTFOLIO</div>
        </div>
      <Chatbot />
    </div>
  );
}

export default App;
