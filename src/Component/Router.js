import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "../Routes/Home/index";
import Search from "../Routes/Search/index";
import TV from "../Routes/TV/index";
import Header from "./Header";
export default () => (
  <Router>
    <>
      {/*rendering only one router*/}

      <Header />
      <Switch>
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
