import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/header.css'
import HomeIcon from '../assets/img/ic_outline-home.svg'
import CurrentHomeIcon from '../assets/img/current-home-icon.svg'
import AboutIcon from '../assets/img/perm_identity_24px.svg'
import CurrentAboutIcon from '../assets/img/current-about-icon.svg'
import WorkIcon from '../assets/img/ic_baseline-work-outline.svg'
import CurrentWorkIcon from '../assets/img/current-work-icon.svg'
import ContactIcon from '../assets/img/mdi_email-outline.svg'
import CurrentContactIcon from '../assets/img/current-contact-icon.svg'

const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className='header'>
      <Link to="/">
        <div className='header-icon'>
          { location.pathname === "/" ? (
            <>
              <img src={CurrentHomeIcon} alt='homeアイコン' />
              <span className='navigation_item-label current-color'>HOME</span>
            </>
          ) : 
            <>
              <img src={HomeIcon} alt='homeアイコン' />
              <span className='navigation_item-label'>HOME</span>
            </>
          }
        </div>
      </Link>
      <Link to="/about">
        <div className='header-icon'>
          { location.pathname === "/about" ? (
            <>
              <img src={CurrentAboutIcon} alt='aboutアイコン' />
              <span className='navigation_item-label current-color'>ABOUT</span>
            </>
          ) : 
            <>
              <img src={AboutIcon} alt='aboutアイコン' />
              <span className='navigation_item-label'>ABOUT</span>
            </>
          }
        </div>
      </Link>
      <Link to="/work">
        <div className='header-icon'>
          { location.pathname === "/work" ? (
            <>
              <img src={CurrentWorkIcon} alt='workアイコン' />
              <span className='navigation_item-label current-color'>WORK</span>
            </>
          ) : 
            <>
              <img src={WorkIcon} alt='workアイコン' />
              <span className='navigation_item-label'>WORK</span>
            </>
          }
        </div>
      </Link>
      <Link to="/contact">
        <div className='header-icon'>
          { location.pathname === "/contact" ? (
            <>
              <img src={CurrentContactIcon} alt='contactアイコン' />
              <span className='navigation_item-label current-color'>CONTACT</span>
            </>
          ) : 
            <>
              <img src={ContactIcon} alt='contactアイコン' />
              <span className='navigation_item-label'>CONTACT</span>
            </>
          }
        </div>
      </Link>
    </div>
  );
}

export default Header;