import React, { useEffect } from 'react';
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
              <img src={CurrentHomeIcon} />
              <span className='navigation_item-label current-color'>HOME</span>
            </>
          ) : 
            <>
              <img src={HomeIcon} />
              <span className='navigation_item-label'>HOME</span>
            </>
          }
        </div>
      </Link>
      <Link to="/about">
        <div className='header-icon'>
          { location.pathname === "/about" ? (
            <>
              <img src={CurrentAboutIcon} />
              <span className='navigation_item-label current-color'>ABOUT</span>
            </>
          ) : 
            <>
              <img src={AboutIcon} />
              <span className='navigation_item-label'>ABOUT</span>
            </>
          }
        </div>
      </Link>
      <Link to="/work">
        <div className='header-icon'>
          { location.pathname === "/work" ? (
            <>
              <img src={CurrentWorkIcon} />
              <span className='navigation_item-label current-color'>WORK</span>
            </>
          ) : 
            <>
              <img src={WorkIcon} />
              <span className='navigation_item-label'>WORK</span>
            </>
          }
        </div>
      </Link>
      <div className='header-icon'>
        { location.pathname === "/contact" ? (
          <>
            <img src={CurrentContactIcon} />
            <span className='navigation_item-label current-color'>CONTACT</span>
          </>
        ) : 
          <>
            <img src={ContactIcon} />
            <span className='navigation_item-label'>CONTACT</span>
          </>
        }
      </div>
    </div>
  );
}

export default Header;