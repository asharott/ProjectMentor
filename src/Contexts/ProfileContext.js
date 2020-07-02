import React, { useState, createContext } from "react";

export const ProfileContext = createContext();

const ProfileContextProvider = (props) => {
  const [posts, setPosts] = useState([{ rating: 1 }]);

  fetch("http://localhost:8000/apip/posts/351")
    .then((response) => response.json())
    .then(
      (data) => {
        console.log(data);
      },

      console.log(posts.rating)
    );
  return (
    <ProfileContext.Provider value={posts}>
      {props.children}
    </ProfileContext.Provider>
  );
};
export default ProfileContextProvider;
