import React, { useContext } from "react";
import NextButton from "../NextButton/NextButton";
import { ReactComponent as Webcam } from "./Assets/Webcam.svg";
import { ReactComponent as WebcamGreen } from "./Assets/WebcamGreen.svg";
import { ReactComponent as FaceToFaceGreen } from "./Assets/FacetofaceGreen.svg";
import { ReactComponent as FaceToFace } from "./Assets/FaceToFace.svg";
import { ProgressContext } from "../../contexts/ProgressContext";

const Page5 = (props) => {
  const { meetingType, setMeetingType } = useContext(ProgressContext);
  const handleWebcam = () => {
    switch (meetingType) {
      case 0:
        return <Webcam onClick={() => setMeetingType(1)} />;
      case 1:
        return <WebcamGreen onClick={() => setMeetingType(0)} />;
      case 2:
        return <Webcam onClick={() => setMeetingType(3)} />;
      case 3:
        return <WebcamGreen onClick={() => setMeetingType(2)} />;
    }
  };
  const handleFaceToFace = () => {
    switch (meetingType) {
      case 0:
        return <FaceToFace onClick={() => setMeetingType(2)} />;
      case 1:
        return <FaceToFace onClick={() => setMeetingType(3)} />;
      case 2:
        return <FaceToFaceGreen onClick={() => setMeetingType(0)} />;
      case 3:
        return <FaceToFaceGreen onClick={() => setMeetingType(1)} />;
    }
  };
  return (
    <div>
      <div className="pageFiveContent">
        <h2>Où se déroule votre mentorat ?</h2>
        <h3>Vous pouvez sélectionner les deux ✌️</h3>
        <ul className="meetingTypeContainer">
          <li>{handleWebcam(meetingType)}</li>
          <li>{handleFaceToFace(meetingType)}</li>

        </ul>
      </div>
      <NextButton />
    </div>
  );
};

export default Page5;
