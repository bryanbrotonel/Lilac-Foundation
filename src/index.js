import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// Fontawesome icon imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

// Redux Store
import { configureStore } from './store';

import App from './scenes/App';

import '../resources/scss/main.scss';

// Creates history
const history = createHistory();

// Configures store
const store = configureStore();

library.add(faEnvelope, faFacebook, faInstagram);

ReactDOM.render(
  <Router history={history}>
    <App store={store} />
  </Router>,
  document.getElementById('root')
);
