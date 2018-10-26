import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './scenes/Home';
import Blog from './scenes/Blog';
import BlogPost from './scenes/BlogPost';
import About from './scenes/About';

const Routes = () => (
  <Switch>
    <Redirect from="/home" to="/" />
    <Route exact path="/" component={Home} />
    <Route exact path="/blog" component={Blog} />
    <Route exact path="/blog/:blogPost" component={BlogPost} />
    <Route exact path="/about" component={About} />
  </Switch>
);

export default Routes;
