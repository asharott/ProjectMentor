import React, { useState } from "react";
import ReactDOM from "react-dom";
import StepByStep from "./StepByStep";
import * as serviceWorker from "./serviceWorker";
import MentorProfile from "./MentorProfile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/MentorProfile/">
          <MentorProfile />
        </Route>
        <Route path="/">
          <StepByStep />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
