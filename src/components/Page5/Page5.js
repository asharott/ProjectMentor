import React from "react";
import NextButton from "../NextButton/NextButton";
import { ReactComponent as Webcam } from "./Assets/Webcam.svg";
import { ReactComponent as FaceToFace } from "./Assets/FaceToFace.svg";

const Page5 = (props) => {
  return (
    <div>
      <div className="pageFiveContent">
        <h2>Où se déroule votre mentorat ?</h2>
        <h3>Vous pouvez sélectionner les deux ✌️</h3>
        <ul className="meetingTypeContainer">
          <li>
            <Webcam />
          </li>
          <li>
            <FaceToFace />
          </li>
        </ul>
      </div>
      <NextButton />
    </div>
  );
};

export default Page5;
