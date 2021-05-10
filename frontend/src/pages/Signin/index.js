import React, { useContext } from "react";
import Container from "../../components/Container";
import { useHistory } from "react-router-dom";
import AuthContext from "../../contexts/auth";

function Signin() {
  const history = useHistory();
  const { signed, authSignIn } = useContext(AuthContext);

  const handleClick = () => {
    history.push("/dashboard");
  };

  const handleSignIn = async () => {
    await authSignIn({ user: "TEste", token: "teste" });
  };

  return (
    <Container bg={"blue"}>
      <div className="box">
        <button onClick={handleSignIn} className="button pink">
          <div />
          <span>Sign in</span>
        </button>
      </div>
    </Container>
  );
}

export default Signin;
