import React from 'react';
import Button from '../../Molecules/Button/Button';
import Logo from './assets/Logo.svg';
import './_header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className='headerContainer'>
        <div className="logo-container">
          <img src={ Logo } alt="Logo" className="logo-image" />
        </div>
        <div className="links-container">
          <Button type="link" href="#">Marketplace</Button>
          <Button type="link" href="#">Shop</Button>
          <Button type="link" href="#">About</Button>
        </div>
        <div className="cta-container">
          <Button type="secondary">Log In</Button>
          <Button type="primary">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;