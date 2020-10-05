// == Import npm
import React from 'react';
import Fade from 'react-reveal/Fade';

// == Import
import Header from '../Header';
import './styles.scss';

// == Composant
const Cv = () => {

  return (
    <div>
      <Header />
      <div className="cv">
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
          <Fade left cascade>
            <div className="cv-experiences"><p>Testtttttttttt</p></div>
            <div className="cv-experiences"><p>Testtttttttttt</p></div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

// == Export
export default Cv;
