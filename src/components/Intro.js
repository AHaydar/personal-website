import React from 'react';
import { ReactComponent as HomePageMainImage } from '../assets/images/HomePageMainImage.svg';
import Button from './Button';
import './intro.scss';

const introTitle = `Hi, I'm Ali.`;
const introData = [
  'A Software Engineer who is passionate about solving problems and developing awesome applications.',
  'I love technology and building high quality software. I am a fan of the DevOps ways of working and automation in general, and I like to stay closely in touch with the business goals.',
  'Learning new things (usually about technology) keeps me motivated. In my spare time, when I am not geeking out, I cycle, cook, do yoga and play board games with friends.'
];

const Intro = () => (
  <section className="intro">
    <HomePageMainImage className="main_image" />
    <div className="intro_text">
      <h1>{introTitle}</h1>
      <div>
        {introData.map(dataItem => (
          <div>
            {dataItem}
            <br />
            <br />
          </div>
        ))}
      </div>
      <Button text="Get in touch" />
    </div>
  </section>
);

export default Intro;
