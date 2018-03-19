console.log(`main`);
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Masternodes from "./Masternodes";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/masternodes" component={Masternodes} />
    </Switch>
  </main>
);

export default Main;
