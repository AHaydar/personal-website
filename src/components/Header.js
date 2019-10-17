import React from 'react';
import Logo from '../assets/images/ali-logo.png';

const Header = () => (
  <div className="header">
    <img src={Logo} alt="logo" />
    <ul>
      <li>| home |</li>
      <li>| work |</li>
      <li>| blog |</li>
    </ul>
    <div className="social-media-icons">Kousa</div>
  </div>
);

export default Header;
