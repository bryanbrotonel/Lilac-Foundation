import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";

import { default as Home } from "../Home";

const App = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default withRouter(App);
