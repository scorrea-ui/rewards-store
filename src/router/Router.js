import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";

export const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
