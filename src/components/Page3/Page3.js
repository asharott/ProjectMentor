import React, { useContext, useState } from "react";
import NextButton from "../NextButton/NextButton";
import { ProgressContext } from "../../contexts/ProgressContext";
import { ReactComponent as MinusTwo } from "./Assets/Two.svg";
import { ReactComponent as MinusTwoGreen } from "./Assets/TwoGreen.svg";
import { ReactComponent as TwotoFive } from "./Assets/TwoToFive.svg";
import { ReactComponent as TwotoFiveGreen } from "./Assets/TwoToFiveGreen.svg";
import { ReactComponent as FiveToTen } from "./Assets/FiveToTen.svg";
import { ReactComponent as FiveToTenGreen } from "./Assets/FiveToTenGreen.svg";
import { ReactComponent as PlusTen } from "./Assets/Ten.svg";
import { ReactComponent as PlusTenGreen } from "./Assets/TenGreen.svg";

const Page3 = (props) => {
  const { job, setExperience, experience } = useContext(ProgressContext);
  const handleMinusTwo = () => {
    if (experience === 1) {
      return <MinusTwoGreen />;
    } else {
      return <MinusTwo onClick={() => setExperience(1)} />;
    }
  };
  const handleTwoToFive = () => {
    if (experience === 2) {
      return <TwotoFiveGreen />;
    } else {
      return <TwotoFive onClick={() => setExperience(2)} />;
    }
  };
  const handleFiveToTen = () => {
    if (experience === 3) {
      return <FiveToTenGreen />;
    } else {
      return <FiveToTen onClick={() => setExperience(3)} />;
    }
  };
  const handlePlusTen = () => {
    if (experience === 4) {
      return <PlusTenGreen />;
    } else {
      return <PlusTen onClick={() => setExperience(4)} />;
    }
  };

  return (
    <div>
      <div className="pageThreeContent">
        <h2>Depuis combien de temps êtes vous {job} ?</h2>
        <ul className="experienceContainer">
          <li>{handleMinusTwo(experience)}</li>
          <li>{handleTwoToFive(experience)}</li>
          <li>{handleFiveToTen(experience)}</li>
          <li>{handlePlusTen(experience)}</li>
        </ul>
      </div>
      <NextButton />
    </div>
  );
};

export default Page3;
