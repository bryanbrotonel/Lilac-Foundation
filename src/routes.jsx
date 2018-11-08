import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './scenes/Home';
import Blog from './scenes/Blog';
import BlogPost from './scenes/BlogPost';
import Team from './scenes/Team';
import About from './scenes/About';
import TeamMemberProfile from './scenes/Team Member Profile';
import Work from './scenes/Work';
import WorkPost from './scenes/WorkPost';

const Routes = () => (
  <Switch>
    <Redirect from="/home" to="/" />
    <Route exact path="/" component={Home} />
    <Route exact path="/work" component={Work} />
    <Route exact path="/work/:workPost" component={WorkPost} />
    <Route exact path="/blog" component={Blog} />
    <Route exact path="/blog/:blogPost" component={BlogPost} />
    <Route exact path="/team" component={Team} />
    <Route exact path="/about" component={About} />
    <Route exact path="/about/:teamMember" component={TeamMemberProfile} />
  </Switch>
);

export default Routes;
