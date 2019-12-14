import React from 'react';
import AliLogo from '../assets/icons/AliLogo';
import { ReactComponent as GithubIcon } from '../assets/icons/GithubIcon.svg';
import { ReactComponent as EmailIcon } from '../assets/icons/EmailIcon.svg';
import { ReactComponent as LinkedinIcon } from '../assets/icons/LinkedinIcon.svg';
import { ReactComponent as TwitterIcon } from '../assets/icons/TwitterIcon.svg';
import './Header.scss';

const menuItems = [
  { title: 'home', url: '' },
  { title: 'work', url: '' },
  { title: 'blog', url: '' }
];

const Header = () => (
  <div className="header">
    <div>
      <AliLogo />
    </div>
    <div>
      <ul>
        {menuItems.map(item => (
          <li key={item.title}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
    <div className="social-media-icons">
      <a href="">
        <EmailIcon className="social-media-icon" />
      </a>
      <a href="">
        <TwitterIcon className="social-media-icon" />
      </a>
      <a href="">
        <LinkedinIcon className="social-media-icon" />
      </a>
      <a href="">
        <GithubIcon className="social-media-icon" />
      </a>
    </div>
  </div>
);

export default Header;
