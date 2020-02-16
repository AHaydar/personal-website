import React from 'react';
import { ReactComponent as GithubIcon } from '../assets/icons/GithubIcon.svg';
import { ReactComponent as EmailIcon } from '../assets/icons/EmailIcon.svg';
import { ReactComponent as LinkedinIcon } from '../assets/icons/LinkedinIcon.svg';
import { ReactComponent as TwitterIcon } from '../assets/icons/TwitterIcon.svg';
import './SocialMediaIcons.scss';

const SocialMediaIcons = props => (
  <div {...props}>
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
);

export default SocialMediaIcons;
