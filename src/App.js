import React, { Fragment } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Footer from './components/Footer';
import './App.scss';

const App = () => (
  <Fragment>
    <Header />
    <Intro />
    <Footer />
  </Fragment>
);

export default App;
