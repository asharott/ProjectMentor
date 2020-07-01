import React, { useState, createContext } from "react";

export const ProfileContext = createContext();

const ProfileContextProvider = (props) => {
  const [rating] = useState(1);
  return (
    <ProfileContext.Provider value={{ rating }}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
