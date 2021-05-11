import React, { useContext } from "react";
import Container from "../../components/Container";
import api from "../../services/api";

import AuthContext from "../../contexts/auth";

function Signout() {
  const { SignOut, userData, user } = useContext(AuthContext);

  const handleSignOut = () => {
    SignOut();
  };

  const handleFetch = async () => {
    const res = await api.get("articles", {
      headers: {
        Authorization: `Bearer ${userData.jwt}`,
      },
    });

    console.log(res.data);
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

        <div className="row">
          <button onClick={handleSignOut} className="button pink">
            <div />
            <span>Sign out</span>
          </button>

          <button onClick={handleFetch} className="button blue">
            <div />
            <span>Fetch content</span>
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Signout;
