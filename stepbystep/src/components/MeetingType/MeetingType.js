import React from "react";
import { ReactComponent as Webcam } from "./Assets/Webcam.svg";
import { ReactComponent as WebcamGray } from "./Assets/WebcamGray.svg";
import { ReactComponent as FaceToFace } from "./Assets/Facetoface.svg";
import { ReactComponent as FaceToFaceGray } from "./Assets/FacetofaceGray.svg";
import { ProfileContext } from "../../contexts/ProfileContext";
import { useContext } from "react";

const MeetingType = (props) => {
  const { meetingType } = useContext(ProfileContext);
  const handleMeetingType = () => {
    switch (meetingType) {
      case 1:
        return (
          <div className="meetingTypeContainer">
            <Webcam /> <FaceToFaceGray />
          </div>
        );
      case 2:
        return (
          <div className="meetingTypeContainer">
            <WebcamGray /> <FaceToFace />
          </div>
        );
      case 3:
        return (
          <div className="meetingTypeContainer">
            <Webcam /> <FaceToFace />
          </div>
        );
    }
  };
  return (
    <div>
      <h2 className="meetingTypeTitle">Vincent est disponible en :</h2>

      {handleMeetingType(meetingType)}
    </div>
  );
};

export default MeetingType;
