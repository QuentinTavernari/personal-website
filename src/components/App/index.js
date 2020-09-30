// == Import npm
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

// == Import
import store from '../../store';
import Homepage from '../Homepage';
import Error404 from '../Error404';
import './styles.css';

// == Composant
const App = () => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/personal-website/" component={Homepage} />
      <Route component={Error404} />
    </Switch>
  </Provider>
);

// == Export
export default App;
