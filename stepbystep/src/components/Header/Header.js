import React, { useContext } from "react";
import ProgressBar from "./progressbar";
import ProfilePic from "./ProfilePic";
import { ProgressContext } from "../../contexts/ProgressContext";
import ReturnArrow from "./ReturnArrow";

const Header = (props) => {
  const Data = useContext(ProgressContext);
  const handleReturn = () => {
    switch (Data.percentage) {
      case 10:
        return <ProfilePic />;

      default:
        return <ReturnArrow />;
    }
  };
  return (
    <div className="sbsHeader">
      {handleReturn()}
      <ProgressBar />
    </div>
  );
};

export default Header;
