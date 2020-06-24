import React from "react";
import Comment from "./Comment";

const Opinion = (props) => {
  return (
    <div>
      <h2 className="opinionTitle">Les 10 avis sur Vincent</h2>
      {/*ADD STARS */}
      <p className="disclaimer">
        Toutes nos évaluations sont collectées par nos services et sont fiables
        à 100%. Elles correspondent à une vraie expérience vécue par les élèves
        du professeur. ✅
      </p>
      <Comment name="Paul" />
      <Comment name="Morgane" />
      <Comment name="Lucas" />
      <Comment name="Maxime" />
    </div>
  );
};

export default Opinion;
