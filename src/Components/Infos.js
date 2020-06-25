import React from "react";
import { ReactComponent as Pin2 } from "../Assets/Pin2.svg";

const Infos = (props) => {
  return (
    <div className="infosContainer">
      <span className="FullName">Vincent Descamps</span>
      <span className="Speciality">Product Designer</span>
      <div className="localisationContainer">
        <Pin2 />
        <span className="Localisation">Paris</span>
      </div>

      {/*DONT FORGET TO ADD STARS */}
    </div>
  );
};

export default Infos;
