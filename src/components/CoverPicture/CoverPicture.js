import React from "react";
import CoverPic from "./Assets/Vincent.png";

const CoverPicture = (props) => {
  return (
    <div>
      <div className="blank"></div>
      <img className="coverPicture" src={CoverPic} alt="cover"></img>
    </div>
  );
};

export default CoverPicture;
