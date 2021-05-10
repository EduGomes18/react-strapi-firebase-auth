import React, { createContext, useState } from "react";
import { signIn } from "../services/auth";
import useLocalStorage from "../hooks/useLocalStorage";
const AuthContext = createContext({ signed: false, user: null });

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useLocalStorage(null);

  const authSignIn = async (data) => {
    try {
      const response = await signIn(data);
      setUserData(response);
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    setUserData(null);
  };

  return (
    <AuthContext.Provider
      value={{ signed: !!userData, userData, authSignIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
