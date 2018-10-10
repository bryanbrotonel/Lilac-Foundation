import React from "react";
import ReactDOM from "react-dom";

import createHistory from "history/createBrowserHistory";
import * as contentful from 'contentful';
import { Route, Switch, Router } from "react-router-dom";

import App from './scenes/App';

import "../resources/scss/main.scss";

var client = contentful.createClient({
  space: 's85q1dv8e3m5',
  accessToken: 'e1f99556ca22933d807bbeba1f93e70d5ebaa2bd37d43e099d26f653e9ade466'
});

client.getEntries().then(entries => {
  entries.items.forEach(entry => {
    if (entry.fields) {
      console.log(entry.fields);
    }
  });
});

ReactDOM.render(
  <Router history={createHistory()}>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
