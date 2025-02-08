import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './assets/styles/style.css'
import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Work from './components/Work'
import WorkDetail from './components/WorkDetail'
import IdealDetail from './components/IdealDetail'
import HANOWA from './components/HANOWA'
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Work />} />
          <Route path="/work/:id" element={<WorkDetail />} />
          <Route path="/myideal" element={<IdealDetail />} />
          <Route path="/hanowa" element={<HANOWA />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
