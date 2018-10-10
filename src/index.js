import React from "react";
import ReactDOM from "react-dom";

import createHistory from "history/createBrowserHistory";
import { Route, Switch, Router } from "react-router-dom";

import { default as App } from './scenes/App';

import "../resources/scss/main.scss";

ReactDOM.render(
  <Router history={createHistory()}>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
