import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './assets/styles/style.css'
import Chatbot from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // URLが変わったとき（画面遷移したとき）スクロールの位置を先頭まで戻す
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <div className='pc-container'>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Chatbot} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
          {/* Not Found */}
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
