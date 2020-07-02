import React, { createContext, useState } from "react";

export const ProgressContext = createContext();

const ProgressContextProvider = (props) => {
  const [percentage, setPercentage] = useState(10);
  const increasePercentage = () => {
    if (percentage < 100) {
      setPercentage(percentage + 10);
    }
  };
  return (
    <ProgressContext.Provider value={{ percentage, increasePercentage }}>
      {props.children}
    </ProgressContext.Provider>
  );
};

export default ProgressContextProvider;
