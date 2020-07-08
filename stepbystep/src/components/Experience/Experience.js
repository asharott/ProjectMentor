import React from "react";
import { ProfileContext } from "../../Contexts/ProfileContext";
import { useContext } from "react";

const Experience = (props) => {
  const { experience } = useContext(ProfileContext);
  const handleExperience = () => {
    switch (experience) {
      case 1:
        return "< 2 ans";
      case 2:
        return "2 à 5 ans";
      case 3:
        return "5 à 10 ans";
      case 4:
        return "10 ans";
      default:
        break;
    }
  };
  return (
    <div>
      <h2 className="experienceTitle">Expérience</h2>
      <p className="experienceContent">{handleExperience(experience)}</p>
    </div>
  );
};

export default Experience;
