import React from 'react';
import AliLogo from '../assets/icons/AliLogo';
import SocialMediaIcons from './SocialMediaIcons';
import './Footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="copyright">
      <AliLogo />
      <span>© ALI HAYDAR 2020</span>
    </div>
    <SocialMediaIcons />
  </div>
);

export default Footer;
