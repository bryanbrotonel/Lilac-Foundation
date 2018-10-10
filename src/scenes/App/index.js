import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";

import Home from "../Home";
import Blog from "../Blog";
import BlogPost from "../BlogPost";

const App = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path='/blog' component={Blog}/>
      <Route exact path='/blog/:blogPost' component={BlogPost} />
    </Switch>
  );
};

export default withRouter(App);
