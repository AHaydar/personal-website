import React from 'react';
import AliLogo from '../assets/icons/AliLogo';
import { ReactComponent as GithubIcon } from '../assets/icons/GithubIcon.svg';
import { ReactComponent as EmailIcon } from '../assets/icons/EmailIcon.svg';
import { ReactComponent as LinkedinIcon } from '../assets/icons/LinkedinIcon.svg';
import { ReactComponent as TwitterIcon } from '../assets/icons/TwitterIcon.svg';
import './Header.scss';

const menuItems = ['home', 'work', 'blog'];

const Header = () => (
  <div className="header">
    <div>
      <AliLogo />
    </div>
    <div>
      <ul>
        {menuItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
    <div className="social-media-icons">
      <EmailIcon className="social-media-icon" />
      <TwitterIcon className="social-media-icon" />
      <LinkedinIcon className="social-media-icon" />
      <GithubIcon className="social-media-icon" />
    </div>
  </div>
);

export default Header;
