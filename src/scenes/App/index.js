import React from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import Proptypes from 'prop-types';
import { Route, Router, Switch } from 'react-router-dom';

import Home from '../Home';
import Blog from '../Blog';
import BlogPost from '../BlogPost';

const App = ({ store }) => {
  const history = createHistory();

  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/:blogPost" component={BlogPost} />
        </Switch>
      </Router>
    </Provider>
  );
};

App.propTypes = {
  store: Proptypes.object.isRequired
};

export default App;
