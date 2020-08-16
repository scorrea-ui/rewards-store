import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Redeem } from "../pages/Redeem";
import { Points } from "../pages/Points";

export const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/rewards-store">
          <Home />
        </Route>
        <Route path="/rewards-store/redeem">
          <Redeem />
        </Route>
        <Route path="/rewards-store/points">
          <Points />
        </Route>
      </Switch>
    </div>
  );
};
