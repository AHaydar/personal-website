import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import MenuIcon from '@material-ui/icons/Menu';
import AliLogo from '../assets/icons/AliLogo';
import SocialMediaIcons from './SocialMediaIcons';
import './Header.scss';

const menuItems = [
  { title: 'home', url: '' },
  { title: 'now', url: '/now' },
  { title: 'work', url: '#myWork' },
  { title: 'blog', url: 'https://medium.com/@ali.haydar' },
];

const Header = () => {
  const [mobileHeaderItemsStatus, setHeaderItemsStatus] = useState(
    'header-items-hide'
  );

  const handleIconToggleClick = () => {
    if (mobileHeaderItemsStatus === 'header-items-hide') {
      setHeaderItemsStatus('header-items-show');
    } else {
      setHeaderItemsStatus('header-items-hide');
    }
  };

  const headerItemStatus = `header-item-status ${mobileHeaderItemsStatus}`;

  return (
    <div className="header">
      <div className="header-logo">
        <AliLogo />
      </div>
      <div className={headerItemStatus}>
        <div>
          {/* <ul>
            {menuItems.map((item) => (
              <li key={item.title}>
                <a href={item.url} onClick={()=>}>{item.title}</a>
              </li>
            ))}
          </ul> */}
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/now">now</Link>
            </li>
            <li>
              <HashLink to="/#myWork">work</HashLink>
            </li>
            <li>
              <a href="https://medium.com/@ali.haydar">blog</a>
            </li>
          </ul>
        </div>
        <SocialMediaIcons className="social-media-icons" />
      </div>
      <MenuIcon
        fontSize="large"
        className="icon-toggle"
        onClick={handleIconToggleClick}
      />
    </div>
  );
};

export default Header;
