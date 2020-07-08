import React, { useContext } from "react";
import { ProfileContext } from "../../Contexts/ProfileContext";


const Resume = (props) => {
  const {parcours} = useContext(ProfileContext);
  return (
    <div>
      <h2 className="resumeTitle">Parcours</h2>
      <p className="resumeText">
       {parcours}
      </p>
    </div>
  );
};

export default Resume;
