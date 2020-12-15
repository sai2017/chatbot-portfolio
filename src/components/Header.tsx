import React from 'react';
import '../assets/styles/header.css'
import HomeIcon from '../assets/img/ic_outline-home.svg'

const Header: React.FC = () => {
  return (
    <div className='header'>
      <img src={HomeIcon}></img>
    </div>
  );
}

export default Header;