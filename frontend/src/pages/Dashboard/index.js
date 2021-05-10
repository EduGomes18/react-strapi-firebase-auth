import React, { useContext } from "react";
import Container from "../../components/Container";

import AuthContext from "../../contexts/auth";

function Signout() {
  const { signOut, user } = useContext(AuthContext);

  console.log(user);

  const handleSignOut = () => {
    signOut();
  };
  return (
    <Container bg="pink">
      <div className="box">
        <h2>Dashboard</h2>
        <ul>
          <li>
            <h4>Display name: {user?.displayName}</h4>
          </li>
          <li>
            <h4>E-mail: {user?.email}</h4>
          </li>
        </ul>

        <button onClick={handleSignOut} className="button blue">
          <div />
          <span>Sign out</span>
        </button>
      </div>
    </Container>
  );
}

export default Signout;
