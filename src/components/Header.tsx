import React from 'react';
import '../assets/styles/header.css'
import HomeIcon from '../assets/img/ic_outline-home.svg'
import AboutIcon from '../assets/img/perm_identity_24px.svg'
import WorkIcon from '../assets/img/ic_baseline-work-outline.svg'
import ContactIcon from '../assets/img/mdi_email-outline.svg'

const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='header-icon'>
        <img src={HomeIcon} />
        <span className='navigation_item-label'>HOME</span>
      </div>
      <div className='header-icon'>
        <img src={AboutIcon} />
        <span className='navigation_item-label'>ABOUT</span>
      </div>
      <div className='header-icon'>
        <img src={WorkIcon} />
        <span className='navigation_item-label'>WORK</span>
      </div>
      <div className='header-icon'>
        <img src={ContactIcon} />
        <span className='navigation_item-label'>CONTACT</span>
      </div>
    </div>
  );
}

export default Header;