// == Import npm
import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
// import Swing from 'react-reveal/Swing';
import ProgressBar from 'react-bootstrap/ProgressBar';

// == Import
import Header from '../Header';
import Footer from '../Footer';
import './styles.scss';

// == Composant
const Cv = () => (
  <div>
    <Header />
    <div className="cv container">
      <div className="cv-header">
        <div className="cv-picture"><img className="cv-photo" src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/120733430_10225326530339270_4754303876415380686_n.jpg?_nc_cat=106&_nc_sid=730e14&_nc_ohc=WnMImsY2NUQAX8n2w0o&_nc_ht=scontent-cdt1-1.xx&oh=984221b558cb77ea2bb12f85067e9b67&oe=5F9D0B06" alt="Quentin Tavernari" /></div>
        <div className="cv-title-container">
          <h2 className="cv-maintitle">Développeur full stack Javascript</h2>
          <div className="cv-subtitle">
            <Fade left cascade>
              <div className="cv-subtitle-element">
                <p>React</p>
                <img className="techno-logo" alt="react logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
              </div>
              <div className="cv-subtitle-element">
                <p>Redux</p>
                <img className="techno-logo" alt="redux logo" src="https://png2.cleanpng.com/sh/4a9464079da16cda5b54e7007a0ee22e/L0KzQYm3VsI2N6d7kpH0aYP2gLBuTgJmbKZ9ReRuYXP3Pb32hB8ucpJ7eeVscnnzhH7rkb02amQ2UKkANnLkQ4m6Vb44PWY5UKQAMEG4QoqCV8I2Pmc8TqQDLoDxd1==/kisspng-redux-react-logo-javascript-dq-5b318756ba3835.7554825015299725667628.png" />
              </div>
              <div className="cv-subtitle-element">
                <p>Node.js</p>
                <img className="techno-logo" alt="node.js logo" src="https://www.developpez.com/public/images/news/node-js10.png" />
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="cv-body">
        <Fade right cascade>
          <h3 className="cv-experiences">Experiences</h3>
          <div className="cv-experiences-item">
            <p className="cv-experiences-job">Chef de marché marketplace</p>
            <p className="cv-experiences-company">Groupe Fnac-Darty | Avr 2016 - Juin 2019</p>
            <ul>
              <li className="cv-experiences-description">- Gestion des vendeurs clés sur les produits informatiques (CA du périmètre de ce poste supérieur à 10M€ annuels)</li>
              <li className="cv-experiences-description">- Développement du CA du périmètre via différents leviers (offres en ligne, animation commerciale, recrutement, web-merchandising)</li>
            </ul>
          </div>
          <div className="cv-experiences-item">
            <p className="cv-experiences-job">Category manager web & magasins</p>
            <p className="cv-experiences-company">Groupe Fnac-Darty | Nov 2014 - Janv 2016</p>
            <ul>
              <li className="cv-experiences-description">- Gestion de plusieurs familles de produits pour fnac.com et les 140 magasins (PC de bureau, moniteurs, objets connectés, sport)</li>
              <li className="cv-experiences-description">- Création et suivi des gammes de produits</li>
              <li className="cv-experiences-description">- Gestion des commandes et des stocks</li>
              <li className="cv-experiences-description">- Développement du CA via l'animation commerciale</li>
            </ul>
          </div>
          <div className="cv-experiences-item">
            <p className="cv-experiences-job">Web merchandiser fnac.com</p>
            <p className="cv-experiences-company">Groupe Fnac-Darty | Fev 2014 - Aout 2014</p>
            <p className="cv-experiences-description">Gestion du web merchandising pour les produits informatiques sur le site Fnac.com :</p>
            <ul>
              <li className="cv-experiences-description">- Paramétrage des actions commerciales web</li>
              <li className="cv-experiences-description">- Proposition et application d'actions web merchandising</li>
              <li className="cv-experiences-description">- Brief et validation de newsletters</li>
            </ul>
          </div>
        </Fade>
        <Fade left cascade>
          <h3 className="cv-education">Formations</h3>
          <div className="cv-education-item">
            <p className="cv-education-school">Ecole O'clock</p>
            <p className="cv-education-training">Formation Full Stack Javascript | Mars - Dec 2020</p>
            <p>735 heures de formation qui m'ont permises d'approfondir mes connaissances en Javascript et de devenir autonome sur React/Redux et Node.js</p>
          </div>
          <div className="cv-education-item">
            <p className="cv-education-school">Université de Paris Est Creteil</p>
            <p className="cv-education-training">Master 1 et 2 E-Commerce | Sept 2013 - Dec 2015</p>
            <p>Compétences acquises en : E-commerce, gestion de projet, cybersécurité, acquisition de trafic (SEO, SEA, CRM)</p>
          </div>
          <div className="cv-education-item">
            <p className="cv-education-school">Université de Bourgogne</p>
            <p className="cv-education-training">Licence Pro Commercialisation de produits en ligne | Oct 2012 - Juin 2013</p>
            <p>Compétences acquises en : Web marketing, création de sites web, graphisme, développement web (HTML5 / CSS3)</p>
          </div>
          <div className="cv-education-item">
            <p className="cv-education-school">Université de Bourgogne</p>
            <p className="cv-education-training">DUT Techniques de commercialisation | Sept 2010 - Juin 2012</p>
            <p>Compétences acquises en : Marketing, négociation, droit, économie, communication</p>
          </div>
        </Fade>
        <Fade right cascade>
          <h3 className="cv-languages">Langues</h3>
          <div className="cv-languages-item">
            <p className="cv-languages-name">Anglais</p>
            <ProgressBar className="cv-languages-progressbar" animated now={75} />
          </div>
          <div className="cv-languages-item">
            <p className="cv-languages-name">Italien</p>
            <ProgressBar className="cv-languages-progressbar" animated now={35} />
          </div>
        </Fade>
        <Fade left cascade>
          <h3 className="cv-hobbies">Loisirs</h3>
          <div className="cv-hobbies-item">
            <p className="cv-hobbies-description">J'ai déjà eu la chance de visiter une bonne dizaine de pays... mais dans 20 ans j'aimerais en avoir fait le triple !</p>
          </div>
          <div className="cv-hobbies-item">
            <p className="cv-hobbies-description">J'aime l'informatique depuis tout petit. Je pourrais parler carte graphique pendant des heures...</p>
          </div>
        </Fade>
      </div>
    </div>
    <Footer />
  </div>
);

// == Export
export default Cv;
