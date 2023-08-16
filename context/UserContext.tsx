"use client";

import { createContext, useContext, useState } from "react";
import { User } from "app/models";

interface Props {
  children: React.ReactNode;
}

export const emptyUserState: User = {
  name: "",
};

export const UserContext = createContext({
  userState: {} as User,
  setUserState: (_value: User) => {},
});

export const UserProvider = ({ children }: Props) => {
  const [userState, setUserState] = useState<User>(emptyUserState);

  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return context;
};

export default UserProvider;
