// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import Homepage from '../Homepage';
import Error404 from '../Error404';

// == Composant
const App = () => (
  <Switch>
    <Route exact path="/personal-website/" component={Homepage} />
    <Route component={Error404} />
  </Switch>
);

// == Export
export default App;
