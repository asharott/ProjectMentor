import React, { useContext } from "react";
import { ReactComponent as Pin2 } from "./Assets/Pin2.svg";
import { ReactComponent as Star1 } from "./Assets/1.svg";
import { ReactComponent as Star2 } from "./Assets/2.svg";
import { ReactComponent as Star3 } from "./Assets/3.svg";
import { ReactComponent as Star4 } from "./Assets/4.svg";
import { ReactComponent as Star5 } from "./Assets/5.svg";
import { ProfileContext } from "../../Contexts/ProfileContext";

const Infos = (props) => {
  const rating = useContext(ProfileContext);
  console.log(rating);
  const handleStars = ( rating ) => {
    if (rating === 1) {
      return <Star1 />;
    } else {
      if (rating === 2) {
        return <Star2 />;
      } else {
        if (rating === 3) {
          return <Star3 />;
        } else {
          if (rating === 4) {
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
      <span className="FullName">Vincent Descamps</span>
      <span className="Speciality">Product Designer</span>
      <div className="localisationContainer">
        <Pin2 />
        <span className="Localisation">Paris</span>
      </div>
      <div className="ratingStars">{handleStars(rating)}</div>
    </div>
  );
};

export default Infos;
