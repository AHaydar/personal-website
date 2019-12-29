import React from 'react';
import AliLogo from '../assets/icons/AliLogo';
import SocialMediaIcons from './SocialMediaIcons';
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
    <SocialMediaIcons />
  </div>
);

export default Header;
