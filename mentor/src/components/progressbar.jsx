import React, { useState } from "react";

const ProgressBar = (props) => {
  const [percentage, setPercentage] = useState(0);

  return (
    <div className="progress-bar">
      <div className="filler" style={{ width: percentage + "%" }}></div>;
      <button
        style={{ margin: 10 }}
        onClick={() => setPercentage(percentage + 20)}
      >
        Next step
      </button>
    </div>
  );
};

export default ProgressBar;
