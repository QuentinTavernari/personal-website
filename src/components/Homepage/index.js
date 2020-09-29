// == Import npm
import React from 'react';

// == Import
import Header from '../Header';
import ConsoleEffect from '../CssEffects/ConsoleEffect';
import './styles.css';

// == Composant
const Homepage = () => (
  <div className="app">
    <Header />
    <ConsoleEffect />
  </div>
);

// == Export
export default Homepage;
