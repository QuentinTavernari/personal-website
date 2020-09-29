// == Import : npm
import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import { increment, decrement } from '../../actions';

// == Import : local
import './styles.scss';

// == Composant
const Counter = () => (
  <header className="header">
    <h1 className="header-title">Quentin Tavernari</h1>
  </header>
);

Counter.propTypes = {
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
)(Counter);
