import React, { useContext } from "react";
import { ProgressContext } from "../../contexts/ProgressContext";

const NextButton = (props) => {
  const { increasePercentage } = useContext(ProgressContext);
  return (
    <div className="nextButtonContainer">
      <button
        type="submit"
        className="nextButton"
        onClick={() => {
          increasePercentage();
        }}
      >
        Continuer
      </button>
    </div>
  );
};

export default NextButton;
