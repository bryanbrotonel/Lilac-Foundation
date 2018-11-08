import React from 'react';
import { Provider } from 'react-redux';
import Proptypes from 'prop-types';

import Routes from '../../routes';
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';

import './styles.scss';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <div id="app">
        <NavBar />
        <div id="body">
          <Routes />
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

App.propTypes = {
  store: Proptypes.object.isRequired
};

export default App;
