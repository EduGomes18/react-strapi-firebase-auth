import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/auth";

import withFirebaseAuth from "react-with-firebase-auth";
import firebase from "firebase";
import "firebase/auth";
import firebaseConfig from "../firebaseConfig";
import AnimatedRoutes from "./animated.routes";

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function Routes(props) {
  return (
    <Router>
      <AuthProvider oAuth={props}>
        <Switch>
          <Route exact path="*">
            <AnimatedRoutes props={props} />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Routes);
