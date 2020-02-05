import React, { Fragment } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Work from './components/Work';
import GetInTouch from './components/GetInTouch';
import './App.scss';

const App = () => (
  <Fragment>
    <Header />
    <Intro />
    <Work />
    <GetInTouch />
    <Footer />
  </Fragment>
);

export default App;
