import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import TV from "../Routes/TV";

export default () => (
  <Router>
    <>
      <Switch>
        {/*rendering only one router*/}
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route
          path="/tv/popular"
          render={() => <h1>composition rendering</h1>}
        />
        <Route path="/search" component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
