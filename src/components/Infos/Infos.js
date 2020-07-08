import React, { useContext } from "react";
import { ReactComponent as Pin2 } from "./Assets/Pin2.svg";
import { ReactComponent as Star1 } from "./Assets/1.svg";
import { ReactComponent as Star2 } from "./Assets/2.svg";
import { ReactComponent as Star3 } from "./Assets/3.svg";
import { ReactComponent as Star4 } from "./Assets/4.svg";
import { ReactComponent as Star5 } from "./Assets/5.svg";
import { ProfileContext } from "../../contexts/ProfileContext";

const Infos = (props) => {
  const {note, firstName, lastName, jobTitle, city} = useContext(ProfileContext);
  const handleStars = ( rating ) => {
    if (note === 1) {
      return <Star1 />;
    } else {
      if (note === 2) {
        return <Star2 />;
      } else {
        if (note === 3) {
          return <Star3 />;
        } else {
          if (note === 4) {
            return <Star4 />;
          } else {
            return <Star5 />;
          }
        }
      }
    }
  };
  return (
    <div className="infosContainer">
      <span className="FullName">{firstName} {lastName}</span>
      <span className="Speciality">{jobTitle}</span>
      <div className="localisationContainer">
        <Pin2 />
      <span className="Localisation">{city}</span>
      </div>
      <div className="ratingStars">{handleStars(note)}</div>
    </div>
  );
};

export default Infos;
