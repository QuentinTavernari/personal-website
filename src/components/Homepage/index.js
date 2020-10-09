// == Import npm
import React from 'react';

// == Import
import Header from '../Header';
import Introduction from '../Introduction';
import CV from '../Cv';
import Contact from '../Contact';
import Footer from '../Footer';
import './styles.scss';

// == Composant
const Homepage = () => (
  <div className="app">
    <Header />
    <Introduction />
    <CV />
    <Contact />
    <Footer />
  </div>
);

// == Export
export default Homepage;
