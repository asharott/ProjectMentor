import React, { useContext } from "react";
import { ProgressContext } from "../../contexts/ProgressContext";

const Page2 = (props) => {
  const { job, setSkills, increasePercentage } = useContext(ProgressContext);
  let tempSkills = [];
  const handleSkills = (event) => {
    tempSkills.push(event.target.innerText);
  };
  const checkSkill = (event) => {
    console.log(tempSkills);
    if (tempSkills.indexOf(event.target.innerText) === -1) {
      handleSkills(event);
      event.target.style.backgroundColor = "#4f4f4f";
    } else {
      tempSkills.splice(tempSkills.indexOf(event.target.innerText), 1);
      event.target.style.backgroundColor = "#bdbdbd";
    }
  };

  return (
    <div>
      <div className="pageTwoContent">
        <h2>Super un.e nouveau.elle {job} </h2>
        <h3>Optionnel : Ajoutez des compétences associées </h3>
        <section className="sbsSkillsContainer">
          <div onClick={(event) => checkSkill(event)}>Figma</div>
          <div onClick={(event) => checkSkill(event)}>Atomic Design</div>
          <div onClick={(event) => checkSkill(event)}>Sketch</div>
          <div onClick={(event) => checkSkill(event)}>Photoshop</div>
          <div onClick={(event) => checkSkill(event)}>UX Design</div>
          <div onClick={(event) => checkSkill(event)}>Lightroom</div>
        </section>
      </div>
      <div className="skillsButtonContainer">
        <button
          className="skillsButton"
          onClick={() => {
            setSkills(tempSkills);
            increasePercentage();
          }}
        >
          Continuer
        </button>
      </div>
    </div>
  );
};

export default Page2;
