import React, { useContext } from "react";
import { ProgressContext } from "../../contexts/ProgressContext";

const ProgressBar = (props) => {
  const { percentage } = useContext(ProgressContext);
  return (
    <div className="progressBarSection">
      <div className="progressBarContainer">
        <span>{percentage + "%"}</span>
        <div className="progressBarWrapper">
          <div className="progress-bar">
            <div className="filler" style={{ width: percentage + "%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
