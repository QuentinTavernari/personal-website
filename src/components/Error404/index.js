// == Import npm
import React from 'react';

// == Import
import Header from '../Header';
import './styles.scss';

// == Composant
const Error404 = () => (
  <div className="app">
    <Header />
    <span>Page not found</span>
  </div>
);

// == Export
export default Error404;
