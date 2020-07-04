import React, { useState, createContext } from "react";

export const ProfileContext = createContext();

const ProfileContextProvider = (props) => {

  let [posts, setPosts] = useState([""]);
  
    fetch("http://localhost:8000/apip/posts/401")
      .then((response) => response.json())
      .then(
        (data) =>  
          setPosts(posts = data.note)
      )      
    return (
      <ProfileContext.Provider value={ posts }>
        {props.children}
      </ProfileContext.Provider>
    );

};
export default ProfileContextProvider;
