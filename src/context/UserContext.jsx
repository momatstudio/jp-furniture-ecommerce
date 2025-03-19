"use client";
import { createContext, useContext } from "react";

const UserContext = createContext();

export const UserDataProvider = ({ children, userData }) => {
  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

export const useUserData = () => useContext(UserContext);

// Note: Do not export a default export.
