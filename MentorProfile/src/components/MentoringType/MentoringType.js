import React from "react";
import { ReactComponent as GroupMentoring } from "./Assets/GroupMentoring.svg";
import { ReactComponent as GroupMentoringGray } from "./Assets/GroupMentoringGray.svg";
import { ReactComponent as SoloMentoringGray } from "./Assets/SoloMentoringGray.svg";
import { ReactComponent as SoloMentoring } from "./Assets/SoloMentoring.svg";
import { ProfileContext } from "../../Contexts/ProfileContext";
import { useContext } from "react";

const MentoringType = (props) => {
  const { mentoringType } = useContext(ProfileContext);
  const handleMentoringType = () => {
    switch (mentoringType) {
      case 1:
        return (
          <div className="typeOfMentoringContainer">
            <SoloMentoring />
            <GroupMentoringGray />
          </div>
        );
      case 2:
        return (
          <div className="typeOfMentoringContainer">
            <SoloMentoringGray />
            <GroupMentoring />
          </div>
        );
      case 3:
        return (
          <div className="typeOfMentoringContainer">
            <SoloMentoring />
            <GroupMentoring />
          </div>
        );
      default:
        break;
    }
  };
  return (
    <div>
      <h2 className="mentoringTypeTitle">Mentorat proposé par Vincent</h2>
      {handleMentoringType(mentoringType)}
    </div>
  );
};

export default MentoringType;
