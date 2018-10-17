import React from 'react';
import ReactDOM from 'react-dom';

// Redux Store
import { configureStore } from './store';

import App from './scenes/App';

import '../resources/scss/main.scss';

// Configures store
const store = configureStore();

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);
