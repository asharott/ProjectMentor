import React, { useContext } from "react";
import NextButton from "../NextButton/NextButton";
import { ReactComponent as Solo } from "./Assets/Solo.svg";
import { ReactComponent as SoloGreen } from "./Assets/SoloGreen.svg";
import { ReactComponent as Group } from "./Assets/Group.svg";
import { ReactComponent as GroupGreen } from "./Assets/GroupGreen.svg";
import { ProgressContext } from "../../contexts/ProgressContext";

const Page4 = (props) => {
  const { mentoringType, setMentoringType } = useContext(ProgressContext);
  const handleSolo = () => {
    switch (mentoringType) {
      case 0:
        return <Solo onClick={() => setMentoringType(1)} />;
      case 1:
        return <SoloGreen onClick={() => setMentoringType(0)} />;
      case 2:
        return <Solo onClick={() => setMentoringType(3)} />;
      case 3:
        return <SoloGreen onClick={() => setMentoringType(2)} />;
    }
  };
  const handleGroup = () => {
    switch (mentoringType) {
      case 0:
        return <Group onClick={() => setMentoringType(2)} />;
      case 1:
        return <Group onClick={() => setMentoringType(3)} />;
      case 2:
        return <GroupGreen onClick={() => setMentoringType(0)} />;
      case 3:
        return <GroupGreen onClick={() => setMentoringType(1)} />;
    }
  };
  return (
    <div>
      <div className="pageFourContent">
        <h2>Quel type de mentorat proposez-vous ?</h2>
        <h3>Vous pouvez sélectionner les deux ✌️</h3>
        <ul className="typeOfMentoringContainer">
          <li>{handleSolo(mentoringType)}</li>
          <li>{handleGroup(mentoringType)}</li>
        </ul>
      </div>
      <NextButton />
    </div>
  );
};

export default Page4;
