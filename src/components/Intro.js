import React from 'react';
import { ReactComponent as HomePageMainImage } from '../assets/images/HomePageMainImage.svg';
import Button from './Button';
import './intro.scss';

const introTitle = `Hi, I'm Ali.`;

const introData = [
  {
    id: 1,
    topic:
      'A software engineer and lifelong learner. I strongly believe that good software is built through good collaboration and communication, and hence I am a big fan of the DevOps ways of working.',
  },
  {
    id: 2,
    topic:
      'I try to find a balance between being a generalist and a specialist in software. My previous work has given me a solid experience in development, quality, cloud solutions, leadership and delivery. At the same time, I like to stay immersed in the code; I am currently utilising and building my skills in development and cloud architecture, using JavaScript (React & NodeJS) and AWS services ',
  },
  {
    id: 3,

    topic:
      'In my spare time, when I am not geeking out, I cycle, cook, do yoga and play board games with friends.',
  },
];

const Intro = () => (
  <section className="intro">
    <HomePageMainImage className="main_image" />
    <div className="intro_text">
      <div className="intro-title">{introTitle}</div>
      <div>
        {introData.map((dataItem) => (
          <div key={dataItem.id}>
            {dataItem.topic}
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
