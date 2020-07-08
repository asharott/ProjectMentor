import React from "react";
import { ProfileContext } from "../../Contexts/ProfileContext";

const Experience = (props) => {
  const { experience } = useContext(ProfileContext);
  return (
    <div>
      <h2 className="experienceTitle">Expérience</h2>
      <p className="experienceContent">2 à 5 ans</p>
    </div>
  );
};

export default Experience;
