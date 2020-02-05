import React from 'react';
import Button from './Button';
import AliImage from '../assets/images/AliImage.jpeg';
import './GetInTouch.scss';

const GetInTouch = () => (
  <div className="get-in-touch">
    <div className="contact-text">
      <h1>Let's do something amazing</h1>
      <p>
        I enjoy taking on new challenges. Even though I am not currently looking
        to change jobs, I am happy to help whenever possible through part time
        consultancy and freelancing. If you have a project you want to get
        started, think you need my help with something or just fancy saying hey,
        get in touch.
      </p>
      <Button text={'Get in touch'} />
    </div>
    <div className="contact-image">
      <img src={AliImage} alt="Profile picture" />
    </div>
  </div>
);

export default GetInTouch;
