import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import defaultDataset from './dataset';
import './assets/styles/style.css'
import Chatbot from './components/Chatbot'
import Header from './components/Header'
import About from './components/About'
import ProfileIcon from './assets/img/portfolio_icon.png'

const App: React.FC = () => {
  return (
    <div className='pc-container'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Chatbot} />
          <Route path="/about" component={About} />
          {/* <Route path="/about" component={} />
          <Route path="/contact" component={} /> */}
          {/* Not Found */}
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
