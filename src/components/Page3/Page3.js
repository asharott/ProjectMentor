import React, { useContext } from "react";
import NextButton from "../NextButton/NextButton";
import { ProgressContext } from "../../contexts/ProgressContext";
import { ReactComponent as MinusTwo } from "./Assets/Two.svg";
import { ReactComponent as TwotoFive } from "./Assets/TwoToFive.svg";
import { ReactComponent as FiveToTen } from "./Assets/FiveToTen.svg";
import { ReactComponent as Plus10 } from "./Assets/Ten.svg";

const Page3 = (props) => {
  const { job } = useContext(ProgressContext);
  return (
    <div>
      <div className="pageThreeContent">
        <h2>Depuis combien de temps êtes vous {job} ?</h2>
        <ul className="experienceContainer">
          <li>
            <MinusTwo />
          </li>
          <li>
            <TwotoFive />
          </li>
          <li>
            <FiveToTen />
          </li>
          <li>
            <Plus10 />
          </li>
        </ul>
      </div>
      <NextButton />
    </div>
  );
};

export default Page3;
