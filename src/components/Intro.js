import React from 'react';
import { ReactComponent as HomePageMainImage } from '../assets/images/HomePageMainImage.svg';
import Button from './Button';
import './intro.scss';

const introTitle = `Hi, I'm Ali.`;
const introData = [
  'A full-stack Software Engineer who lives in Auckland, New Zealand. I use JavaScript in my daily job and when I code for fun - current focus is React and Node.js.',
  'Learning new things, usually about technology, keeps me motivated. I like to stay closely in touch with the business goals, and I enjoy delivering high quality products. This involves people, code and processes.',
  'I consider myself lucky I work in the software development industry as it aligns well with my passion to solve problems - programming languages are merely enablement tools.',
  'Previous work experiences centered on the testing aspect of Software engineering, with involvement in architecture and cloud solutions. This has enabled me to become a better software engineer and think about products form all aspects, keeping the user perspective in mind at all times',
  'In my spare time, when I am not geeking out, I cycle, cook, do yoga and play board games with friends.'
];

const Intro = () => (
  <section className="intro">
    <HomePageMainImage className="main_image" />
    <div className="intro_text">
      <div className="intro-title">{introTitle}</div>
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
