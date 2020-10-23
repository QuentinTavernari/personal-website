// == Import npm
import React from 'react';

import TimLogo from '../../img/tim-logo.png';
import Homepage from '../../img/tim-homepage.jpg';
import Quests from '../../img/tim-quetes.jpg';

// == Import
import './styles.scss';

// == Composant
const Work = () => (
  <div className="container" id="work">
    <div className="work container">
      <div className="work-header">
        <h2>Mes réalisations</h2>
      </div>
      <div className="work-body">
        <div className="work-body-photo-container-tim"><img className="work-body-photo-tim" src={TimLogo} alt="logo tarkov items manager" /></div>
        <h3>Tarkov Items Manager</h3>
        <p className="work-body-text-tim">Cette application vise a apporter une aide aux joueurs d'Escape From Tarkov. Ce projet est parti d'un constat entre joueurs : il manquait un outil permettant de comptabiliser les objets récupérés au cours des parties. Nous avons donc choisi d'en faire notre projet de fin de formation, et nous le continuons aujourd'hui. </p>
        <p className="work-body-text-tim">Ce projet utilise React, Redux et Node.js avec une API Postgres. Le site est aujourd'hui fonctionnel, et sa mise en ligne est prévue pour très bientôt.</p>
        <p className="work-body-text-tim">Le code est disponible <a href="https://github.com/Birdy87/Tarkov-Items-Manager" target="blank">a cette adresse</a>.</p>
        <div className="work-body-photo-container-tim"><img className="work-body-photo-tim" src={Homepage} alt="page d'accueil tarkov items manager" /></div>
        <div className="work-body-photo-container-tim"><img className="work-body-photo-tim" src={Quests} alt="page quetes tarkov items manager" /></div>
      </div>
    </div>
  </div>
);

// == Export
export default Work;
