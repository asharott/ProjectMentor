import React, { useContext } from "react";
import { ProfileContext } from "../../Contexts/ProfileContext";

const Skills = (props) => {
  const {competences} = useContext(ProfileContext);
  return (
    <div className="skillsSection">
      <h2 className="skillsTitle">Compétences</h2>
      <section className="skillsContainer">
        <div>{competences[0]}</div>
        <div>{competences[1]}</div>
        <div>{competences[2]}</div>
        <div>{competences[3]}</div>
      </section>
    </div>
  );
};

export default Skills;
