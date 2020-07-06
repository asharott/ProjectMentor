import React, { createContext, useState } from "react";

export const ProgressContext = createContext();

const ProgressContextProvider = (props) => {
  const [percentage, setPercentage] = useState(20);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [job, setJob] = useState("");
  const [city, setCity] = useState("");
  const [resume, setResume] = useState("");
  const [experience, setExperience] = useState(0);
  const [mentoringType, setMentoringType] = useState(0);
  const [meetingType, setMeetingType] = useState(0);

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
        city,
        setCity,
        resume,
        setResume,
        experience,
        setExperience,
        mentoringType,
        setMentoringType,
        meetingType,
        setMeetingType,
      }}
    >
      {props.children}
    </ProgressContext.Provider>
  );
};

export default ProgressContextProvider;
