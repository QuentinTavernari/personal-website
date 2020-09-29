// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { increment, decrement } from '../../actions';

// == Import : local
import './styles.css';

// == Composant
const Counter = ({ count, increment, decrement }) => (
  <div className="counter">
    <button type="button" onClick={decrement}>⇩</button>
    <div className="value">{count}</div>
    <button type="button" onClick={increment}>⇧</button>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  count: state.counter.value,
});

const mapDispatch = (dispatch) => ({
  increment: () => {
    dispatch(increment());
  },
  decrement: () => {
    dispatch(decrement());
  },
});

export default connect(
  mapState,
  mapDispatch,
)(Counter);
