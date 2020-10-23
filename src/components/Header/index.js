// == Import : npm
import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pulse from 'react-reveal/Pulse';

// import { } from '../../actions';

// == Import : local
import './styles.scss';

// == Composant
const Header = () => (
  <header className="header" id="header">
    <nav className="navbar navbar-expand-lg">
      <Pulse>
        <a className="nav-item-home" href="#header"><h1 className="navbar-brand">Quentin Tavernari</h1></a>
      </Pulse>
      <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-item-cv" href="#cv">Mon CV</a>
          </li>
          <li className="nav-item">
            <a className="nav-item-work" href="#work">Réalisations</a>
          </li>
          <li className="nav-item">
            <a className="nav-item-contact" href="#contact">Me contacter</a>
          </li>
          <li className="nav-item">
            <a className="nav-item-github" href="https://github.com/QuentinTavernari" target="blank">Github<img className="github-logo" alt="github logo" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" /></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  // count: PropTypes.number.isRequired,
  // increment: PropTypes.func.isRequired,
  // decrement: PropTypes.func.isRequired,
};

const mapState = null;

const mapDispatch = null;

// const mapState = (state) => ({
//   count: state.counter.value,
// });

// const mapDispatch = (dispatch) => ({
//   increment: () => {
//     dispatch(increment());
//   },
//   decrement: () => {
//     dispatch(decrement());
//   },
// });

export default connect(
  mapState,
  mapDispatch,
)(Header);
