import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Redeem } from "../pages/Redeem";
import { Points } from "../pages/Points";

export const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/redeem" component={Redeem}></Route>
        <Route path="/points" component={Points}></Route>
      </Switch>
    </div>
  );
};
