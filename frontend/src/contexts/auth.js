import React, { createContext, useEffect } from "react";
import { signIn } from "../services/auth";
import useLocalStorage from "../hooks/useLocalStorage";
import api from "../services/api";
import firebase from "firebase";
const AuthContext = createContext({ signed: false, user: null });

export const AuthProvider = ({ oAuth, children }) => {
  const { user, signInWithGoogle, signInWithFacebook, signOut } = oAuth;

  const [userData, setUserData] = useLocalStorage(null);

  //Implementar a funcao signInWithGoogle passando o token pro strapi decodificar

  const strapiSignIn = async (data) => {
    try {
      const response = await signIn(data);
      setUserData(response);
    } catch (error) {
      console.log(error);
    }
  };

  const SignOut = async () => {
    signOut();
    setUserData(null);
  };

  const refreshStrapiToken = async () => {
    try {
      const token = await firebase.auth().currentUser.getIdToken(false);
      const res = await api.post("/firebase/auth", { token });

      setUserData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!!user) {
      refreshStrapiToken();
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        signed: !!userData,
        userData,
        user,
        strapiSignIn,
        signInWithGoogle,
        signInWithFacebook,
        SignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
