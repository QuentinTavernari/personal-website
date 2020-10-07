// == Import : npm
import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import { } from '../../actions';

// == Import : local
import './styles.scss';

// == Composant
const Header = () => (
  <header className="header">
    <nav className="navbar navbar-expand-lg navbar-light">
      <h1 className="navbar-brand"><Link className="link link--kukuri" data-letters="Quentin Tavernari" to="/personal-website/">Quentin Tavernari</Link></h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-item-home" to="/personal-website/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item-cv" to="/personal-website/cv">Mon CV</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item-contact" to="/personal-website/contact">Me contacter</Link>
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
