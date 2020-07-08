import React from "react";
import NextButton from "../NextButton/NextButton";

const Page7 = (props) => {
  return (
    <div>
      <div className="pageSevenContent">
        <h2>Parlez-nous de votre métier</h2>
        <h3>Décrivez nous votre journée type, vos missions</h3>
        <textarea resize="none"></textarea>
      </div>
      <NextButton />
    </div>
  );
};

export default Page7;
