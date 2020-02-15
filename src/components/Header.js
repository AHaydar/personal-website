import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import AliLogo from '../assets/icons/AliLogo';
import SocialMediaIcons from './SocialMediaIcons';
import './Header.scss';

const menuItems = [
  { title: 'home', url: '' },
  { title: 'work', url: '' },
  { title: 'blog', url: '' }
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
          <ul>
            {menuItems.map(item => (
              <li key={item.title}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
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
