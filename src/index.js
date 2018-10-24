import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// Fontawesome icon imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Redux Store
import { configureStore } from './store';

import App from './scenes/App';

import '../resources/scss/main.scss';

// Creates history
const history = createHistory();

// Configures store
const store = configureStore();

library.add(faBars);

ReactDOM.render(
  <Router history={history}>
    <App store={store} />
  </Router>,
  document.getElementById('root')
);
