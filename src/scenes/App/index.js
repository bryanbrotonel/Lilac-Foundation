import React from 'react';
import { Provider } from 'react-redux';
import Proptypes from 'prop-types';

import Routes from '../../routes';
import NavBar from '../../components/Navbar';
import { Footer } from '../../components/Footer';

import './styles.scss';

const App = ({ store }) => {
  return (
    <div id="app">
      <NavBar />
      <div id="body">
        <Provider store={store}>
          <Routes />
        </Provider>
      </div>
      <Footer />
    </div>
  );
};

App.propTypes = {
  store: Proptypes.object.isRequired
};

export default App;
