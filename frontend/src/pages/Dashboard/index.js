import React, { useContext } from "react";
import Container from "../../components/Container";

import AuthContext from "../../contexts/auth";

function Signout() {
  const { signOut } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut();
  };
  return (
    <Container bg="pink">
      <div className="box">
        <button onClick={handleSignOut} className="button blue">
          <div />
          <span>Sign out</span>
        </button>
      </div>
    </Container>
  );
}

export default Signout;
