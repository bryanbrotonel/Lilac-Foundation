import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// Scroll to Top Component
import ScrollToTop from './components/Scroll To Top';

// Redux Store
import { configureStore } from './store';

import App from './scenes/App';

import '../resources/scss/main.scss';

// Creates history
const history = createHistory();

// Configures store
const store = configureStore();

ReactDOM.render(
  <Router history={history}>
    <ScrollToTop>
      <App store={store} />
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
);
