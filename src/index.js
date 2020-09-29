import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import store from './store';

const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

const target = document.getElementById('root');

render(rootReactElement, target);

serviceWorker.unregister();
