import React from "react";
import profilepic from "../Assets/ProfilePic.png";

const ProfilePic = (props) => {
  return (
    <div className="profilePicContainer">
      <img src={profilepic} className="profilePic" alt="profile pic" />
    </div>
  );
};

export default ProfilePic;
