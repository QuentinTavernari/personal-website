// == Import : npm
import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import { } from '../../actions';

// == Import : local
import './styles.scss';

// == Composant
const Footer = () => (
  <footer className="footer">
    <p className="footer-copyright">Copyright © 2020 Quentin Tavernari. Tous droits réservés.</p>
  </footer>
);

Footer.propTypes = {
};

const mapState = null;

const mapDispatch = null;

export default connect(
  mapState,
  mapDispatch,
)(Footer);
