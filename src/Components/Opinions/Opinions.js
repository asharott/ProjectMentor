import React, { useContext } from "react";
import Comment from "./Comment";
import { ProfileContext } from "../../Contexts/ProfileContext";

const Opinion = (props) => {
  const { commentAuthor, commentContent } = useContext(ProfileContext);
  return (
    <div>
      <h2 className="opinionTitle">Les 10 avis sur Vincent</h2>
      {/*ADD STARS */}
      <p className="disclaimer">
        Toutes nos évaluations sont collectées par nos services et sont fiables
        à 100%. Elles correspondent à une vraie expérience vécue par les élèves
        du professeur.
      </p>
      <Comment content={commentContent[0]} name={commentAuthor[0]} />
      <Comment content={commentContent[1]} name={commentAuthor[1]} />
      <Comment content={commentContent[2]} name={commentAuthor[2]} />
      <div className="spacer"></div>
    </div>
  );
};

export default Opinion;
