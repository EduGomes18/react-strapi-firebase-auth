import React, { useContext } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import AuthContext from "../contexts/auth";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Animated() {
  let location = useLocation();
  const { signed } = useContext(AuthContext);

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Switch location={location}>
          <Route exact path="/">
            {signed ? <Redirect to="/dashboard" /> : <AuthRoutes />}
          </Route>

          <Route path="/dashboard">
            {!signed ? <Redirect to="/auth" /> : <AppRoutes />}
          </Route>

          <Route path="/auth">
            {signed ? <Redirect to="/dashboard" /> : <AuthRoutes />}
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Animated;
