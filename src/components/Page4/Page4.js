import React from "react";
import NextButton from "../NextButton/NextButton";
import { ReactComponent as Solo } from "./Assets/Solo.svg";
import { ReactComponent as Group } from "./Assets/Group.svg";

const Page4 = (props) => {
  return (
    <div>
      <div className="pageFourContent">
        <h2>Quel type de mentorat proposez-vous ?</h2>
        <h3>Vous pouvez sélectionner les deux ✌️</h3>
        <ul className="typeOfMentoringContainer">
          <li>
            <Solo />
          </li>
          <li>
            <Group />
          </li>
        </ul>
      </div>
      <NextButton />
    </div>
  );
};

export default Page4;
