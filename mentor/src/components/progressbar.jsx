import React, { useContext } from "react";
import { ProgressContext } from "../contexts/ProgressContext";

const ProgressBar = (props) => {
  const { percentage } = useContext(ProgressContext);
  return (
    <div className="progress-bar">
      <div className="filler" style={{ width: percentage + "%" }}></div>
    </div>
  );
};

export default ProgressBar;
