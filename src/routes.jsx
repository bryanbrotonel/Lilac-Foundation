import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from 'scenes/Home';
import Blog from 'scenes/Blog';
import BlogPost from 'scenes/Blog Post';
import Team from 'scenes/Team';
import About from 'scenes/About';
import TeamMemberProfile from 'scenes/Team Member Profile';
import Projects from 'scenes/Projects';
import ProjectPost from 'scenes/Project Post';
import NotFound from 'scenes/Not Found';

const Routes = () => (
  <Switch>
    <Redirect from="/home" to="/" />
    <Route exact path="/" component={Home} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/projects/:projectPost" component={ProjectPost} />
    <Route exact path="/blog" component={Blog} />
    <Route exact path="/blog/:blogPost" component={BlogPost} />
    <Route exact path="/team" component={Team} />
    <Route exact path="/team/:teamMember" component={TeamMemberProfile} />
    <Route exact path="/about" component={About} />
    <Route component={NotFound}/>
  </Switch>
);

export default Routes;
