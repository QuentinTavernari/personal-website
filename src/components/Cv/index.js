// == Import npm
import React from 'react';

// == Import
import Header from '../Header';
import './styles.scss';

// == Composant
const Cv = () => (
  <div className="cv-container">
    <Header />
    <div className="cv-header">
      <div className="cv-picture"><img src="public/photo.png" alt="Quentin Tavernari" /></div>
      <div className="cv-title"></div>
    </div>

  </div>
);

// == Export
export default Cv;
