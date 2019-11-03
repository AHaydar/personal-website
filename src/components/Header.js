import React from 'react';
import AliLogo from '../assets/icons/AliLogo';
import GithubIcon from '../assets/icons/GithubIcon';
import EmailIcon from '../assets/icons/EmailIcon';
import LinkedinIcon from '../assets/icons/LinkedinIcon';
import TwitterIcon from '../assets/icons/TwitterIcon';
import './Header.scss';

const menuItems = ['home', 'work', 'blog'];

const Header = () => (
  <div className="header">
    <AliLogo />
    <ul>
      {menuItems.map(item => (
        <li>{item}</li>
      ))}
    </ul>
    <div className="social-media-icons">
      <GithubIcon />
      <TwitterIcon />
      <LinkedinIcon />
      <EmailIcon />
    </div>
  </div>
);

export default Header;
