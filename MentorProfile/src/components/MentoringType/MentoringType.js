import React from "react";
import { ReactComponent as GroupMentoring } from "./Assets/GroupMentoring.svg";
import { ReactComponent as SoloMentoringGray } from "./Assets/SoloMentoringGray.svg";
import { ProfileContext } from "../../Contexts/ProfileContext";

const MentoringType = (props) => {
  const { mentoringType } = useContext(ProfileContext);
  return (
    <div>
      <h2 className="mentoringTypeTitle">Mentorat proposé par Vincent</h2>
      <div className="typeOfMentoringContainer">
        <SoloMentoringGray />
        <GroupMentoring />
      </div>
    </div>
  );
};

export default MentoringType;
