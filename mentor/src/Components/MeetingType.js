import React from "react";
import { ReactComponent as Webcam } from "../Assets/Webcam.svg";
import { ReactComponent as FaceToFace } from "../Assets/Facetoface.svg";

const MeetingType = (props) => {
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
