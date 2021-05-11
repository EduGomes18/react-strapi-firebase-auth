import React, { useContext } from "react";
import Container from "../../components/Container";
import { useHistory } from "react-router-dom";
import AuthContext from "../../contexts/auth";

function Signin() {
  const history = useHistory();

  const { signed, signInWithGoogle, strapiSignIn, signInWithFacebook } =
    useContext(AuthContext);

  const handleClick = () => {
    history.push("/dashboard");
  };

  const handleSignIn = async () => {
    await strapiSignIn({ user: "TEste", token: "teste" });
  };

  const handleSignInWithFace = async () => {
    await signInWithFacebook();
  };

  const handleSignWithGoogle = async () => {
    await signInWithGoogle();
  };

  return (
    <Container bg={"blue"}>
      <div className="box">
        <h2>Login</h2>
        <div className="row">
          <button onClick={handleSignIn} className="button pink">
            <div />
            <span>Sign in</span>
          </button>
          <button onClick={handleSignWithGoogle} className="button blue">
            <div />
            <span>Sign in with Google</span>
          </button>
          <button onClick={handleSignInWithFace} className="button gray">
            <div />
            <span>Sign in with Facebook</span>
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Signin;
