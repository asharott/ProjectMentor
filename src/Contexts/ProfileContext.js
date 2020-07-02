import React, { useState, createContext } from "react";

export const ProfileContext = createContext();

const ProfileContextProvider = (props) => {

  const [posts, setPosts] = useState([]);
  
    fetch("http://localhost:8000/apip/posts/351")
      .then((response) => response.json())
      .then(
        (data) =>  { 
        setPosts(data.note);
       
        },
        
        console.log(posts)
      )      
      
      const rating = posts.note;
    return (
      <ProfileContext.Provider value={ rating }>
        {props.children}
      </ProfileContext.Provider>
    );

};
export default ProfileContextProvider;
