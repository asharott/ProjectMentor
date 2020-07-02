import React from "react";
import ProgressBar from "./progressbar";
import ProfilePic from "./ProfilePic";

const Header = (props) => {
  return (
    <div className="sbsHeader">
      <ProfilePic />
      <ProgressBar />
    </div>
  );
};

export default Header;
