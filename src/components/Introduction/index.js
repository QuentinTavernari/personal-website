// == Import npm
import React from 'react';
import Pulse from 'react-reveal/Pulse';
import Jump from 'react-reveal/Jump';

// == Import
import './styles.scss';

// == Composant
const Introduction = () => (
  <div className="container-fluid" id="home">
    <div className="homepage">
      <div className="homepage-introduction">
        <Jump><h2 className="homepage-title">Bienvenue !</h2></Jump>
        <Pulse left><p className="homepage-content">Je m'appelle Quentin, j'ai 28 ans et je suis à la recherche d'un emploi en tant que développeur front-end.</p></Pulse>
        <Pulse><p className="homepage-content">J'ai réalisé ce site pour mettre à disposition un aperçu de mon cv et de mes compétences, et pour y entreposer quelques tests persos.</p></Pulse>
        <Pulse right><p className="homepage-content"> Si vous êtes intéressé(e) par mon profil, vous pouvez m'envoyer un mail via la rubrique "me contacter".</p></Pulse>
      </div>
      <div className="wrap">
        <img alt="scroll arrow" src="https://png2.cleanpng.com/sh/608c40e0e52a85d061cd5c31afcec236/L0KzQYm3U8I6N5l0fZH0aYP2gLBuTfNtaaR4gdU2aX7nhcT7kvlidF54feRBaXPog37wjvMue5Rmfth4bHTsfri0hCJmgV50RdZ4d36wccP5jCcuPZJnfKU9YXXmR7fqWcYvPWQ4SqsAM0W0RYO5U8Q6OmQ1UKMEMj7zfri=/kisspng-classic-industrial-services-inc-scaffolding-grey-o-down-arrow-5abd34aec7fc96.5332953515223492308192.png" id="arrow" className="animated bounce" />
      </div>
    </div>
  </div>
);

// == Export
export default Introduction;
