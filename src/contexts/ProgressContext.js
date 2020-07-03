import React, { createContext, useState } from "react";

export const ProgressContext = createContext();

const ProgressContextProvider = (props) => {
  const [percentage, setPercentage] = useState(100);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [job, setJob] = useState("");
  const [adress, setAdress] = useState("");

  const increasePercentage = () => {
    if (percentage < 100) {
      setPercentage(percentage + 10);
    }
  };
  const decreasePercentage = () => {
    if (percentage > 10) {
      setPercentage(percentage - 10);
    }
  };
  return (
    <ProgressContext.Provider
      value={{
        percentage,
        increasePercentage,
        decreasePercentage,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        job,
        setJob,
        adress,
        setAdress,
      }}
    >
      {props.children}
    </ProgressContext.Provider>
  );
};

export default ProgressContextProvider;
