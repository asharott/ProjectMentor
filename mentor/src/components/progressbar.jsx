import React, { useContext } from "react";
import { ProgressContext } from "../contexts/ProgressContext";

const ProgressBar = (props) => {
  const { percentage, increasePercentage } = useContext(ProgressContext);
  return (
    <div className="progress-bar">
      <div className="filler" style={{ width: percentage + "%" }}></div>
      <button style={{ margin: 10 }} onClick={() => increasePercentage()}>
        Next step
      </button>
    </div>
  );
};

export default ProgressBar;
