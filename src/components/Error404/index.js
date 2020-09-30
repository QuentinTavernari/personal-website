// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import Header from '../Header';
import './styles.scss';

// == Composant
const Error404 = () => (
  <div className="error404-container">
    <Header />
    <h2 className="error404-title" data-heading="0">Erreur 404</h2>
    <p className="error404-text">Il fait sombre ici... vous voulez peut-être retourner à <Link to="/personal-website/">la page d'accueil ?</Link></p>
  </div>
);

// == Export
export default Error404;
