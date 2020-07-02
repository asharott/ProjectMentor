import React, { useContext } from "react";
import { ProgressContext } from "../contexts/ProgressContext";

const NextStepButton = () => {
  const { percentage, increasePercentage } = useContext(ProgressContext);
  if (percentage === 100) {
    document.querySelector(".NextStepButton").style.visibility = "hidden";
    document.querySelector(".Submit").style.visibility = "visible";
  }

  return (
    <div>
      <button
        className="NextStepButton"
        style={{ margin: 10 }}
        onClick={() => increasePercentage()}
      >
        Next step
      </button>
      <button className="Submit" type="submit">
        Confirm
      </button>
    </div>
  );
};

export default NextStepButton;
