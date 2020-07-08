import React from "react";
import { ReactComponent as Webcam } from "./Assets/Webcam.svg";
import { ReactComponent as FaceToFace } from "./Assets/Facetoface.svg";
import { ProfileContext } from "../../Contexts/ProfileContext";

const MeetingType = (props) => {
  const { meetingType } = useContext(ProfileContext);
  return (
    <div>
      <h2 className="meetingTypeTitle">Vincent est disponible en :</h2>
      <div className="meetingTypeContainer">
        <Webcam />
        <FaceToFace />
      </div>
    </div>
  );
};

export default MeetingType;
