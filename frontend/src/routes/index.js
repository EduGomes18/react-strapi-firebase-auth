import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/auth";

import AnimatedRoutes from "./animated.routes";

function Routes() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="*">
            <AnimatedRoutes />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default Routes;
