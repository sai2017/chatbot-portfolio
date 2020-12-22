import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/header.css'
import HomeIcon from './HomeIcon'
import AboutIcon from './AboutIcon'
import WorkIcon from './WorksIcon'
import ContactIcon from './ContactIcon'

const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className='header'>
      <Link to="/" className='header-item'>
        <div className='header-icon'>
          { location.pathname === "/" ? (
            <>
              < HomeIcon color={'#222222'} />
              <span className='navigation_item-label current-color'>HOME</span>
            </>
          ) : 
            <>
              < HomeIcon />
              <span className='navigation_item-label'>HOME</span>
            </>
          }
        </div>
      </Link>
      <Link to="/about" className='header-item'>
        <div className='header-icon'>
          { location.pathname === "/about" ? (
            <>
              <AboutIcon color={'#222222'} />
              <span className='navigation_item-label current-color'>ABOUT</span>
            </>
          ) : 
            <>
              <AboutIcon />
              <span className='navigation_item-label'>ABOUT</span>
            </>
          }
        </div>
      </Link>
      <Link to="/work" className='header-item'>
        <div className='header-icon'>
          { location.pathname === "/work" ? (
            <>
              <WorkIcon color={'#222222'} />
              <span className='navigation_item-label current-color'>WORKS</span>
            </>
          ) : 
            <>
              <WorkIcon />
              <span className='navigation_item-label'>WORK</span>
            </>
          }
        </div>
      </Link>
      <Link to="/contact" className='header-item'>
        <div className='header-icon'>
          { location.pathname === "/contact" ? (
            <>
              <ContactIcon color={'#222222'} />
              <span className='navigation_item-label current-color'>CONTACT</span>
            </>
          ) : 
            <>
              <ContactIcon />
              <span className='navigation_item-label'>CONTACT</span>
            </>
          }
        </div>
      </Link>
    </div>
  );
}

export default Header;