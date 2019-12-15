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
      <a href="mailto:ali.haydar85@gmail.com">
        <EmailIcon className="social-media-icon" />
      </a>
      <a href="https://twitter.com/Alee_Haydar">
        <TwitterIcon className="social-media-icon" />
      </a>
      <a href="https://www.linkedin.com/in/ahaydar/">
        <LinkedinIcon className="social-media-icon" />
      </a>
      <a href="https://github.com/AHaydar">
        <GithubIcon className="social-media-icon" />
      </a>
    </div>
  </div>
);

export default Header;
