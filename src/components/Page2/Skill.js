import React, { useContext } from "react";
import { ProgressContext } from "../../contexts/ProgressContext";

const Skill = (props) => {
  const { skills, setSkills } = useContext(ProgressContext);
  
  const handleSkills = (event) => {
    setSkills([event.target.innerText]);
  };
  return <div onClick={(event) => handleSkills(event)}>{props.name}</div>;
};

export default Skill;
