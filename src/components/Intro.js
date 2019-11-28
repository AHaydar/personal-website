import React from 'react';
import HomePageMainImage from '../assets/images/HomePageMainImage';
import './intro.scss';

const introData = [
  'A Software Engineer who is passionate about solving problems and developing awesome applications.',
  'I love technology and building high quality software. I am a fan of the DevOps ways of working and automation in general, and I like to stay closely in touch with the business goals.',
  'I have been in the software industry for around 10 years, mainly in Lebanon, until I moved to New Zealand 3 years ago.',
  'My previous work was focused on the testing/automation aspect of software engineering, with a small involvement in the development, architecture, integration and deployment.',
  'In the past few years, I started growing interest in features development as well, and got into learning JavaScript, which fascinates me with its flexibility and evolution over the years.',
  'Learning new things (usually about technology) keeps me motivated. In my spare time, when I am not geeking out, I cycle, cook, do yoga and play board games with friends.',
];

const Intro = () => (
  <section className="intro">
    <HomePageMainImage />
    <div>
      <h1>Hi, I'm Ali</h1>
      <p>
        {introData.map(dataItem => (
          <div>{dataItem}</div>
        ))}
      </p>
    </div>
  </section>
);

export default Intro;
