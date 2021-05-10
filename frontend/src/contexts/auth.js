import React, { createContext, useState } from "react";
import { signIn } from "../services/auth";
import useLocalStorage from "../hooks/useLocalStorage";
const AuthContext = createContext({ signed: false, user: null });

export const AuthProvider = ({ oAuth, children }) => {
  const { user, signInWithGoogle, signOut } = oAuth;

  const [userData, setUserData] = useLocalStorage(null);

  console.log("log no context", user);

  //Implementar a funcao signInWithGoogle passando o token pro strapi decodificar

  const strapiSignIn = async (data) => {
    try {
      const response = await signIn(data);
      setUserData(response);
    } catch (error) {
      console.log(error);
    }
  };

  const strapiSignOut = async () => {
    setUserData(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!userData || !!user,
        userData,
        strapiSignIn,
        signInWithGoogle,
        strapiSignOut,
        user,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
