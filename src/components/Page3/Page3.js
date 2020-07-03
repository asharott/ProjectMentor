import React, { useContext } from "react";
import NextButton from "../NextButton/NextButton";
import { ProgressContext } from "../../contexts/ProgressContext";
import { ReactComponent as MinusTwo } from "/Assets/2-.svg";
import { ReactComponent as TwotoFive } from "/Assets/2to5.svg";
import { ReactComponent as FiveToTen } from "/Assets/5to10.svg";
import { ReactComponent as Plus10 } from "/Assets/10+";

const Page3 = (props) => {
  const { job } = useContext(ProgressContext);
  return (
    <div>
      <div className="pageThreeContent">
        <h2>Depuis combien de temps êtes vous {job} ?</h2>
        <div className="experienceContainer">
          <MinusTwo />
          <TwotoFive />
          <FiveToTen />
          <Plus10 />
        </div>
      </div>
      <NextButton />
    </div>
  );
};

export default Page3;
