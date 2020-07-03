import React from "react";
import NextButton from "../NextButton/NextButton";

const Page8 = (props) => {
  return (
    <div>
      <div className="pageEightContent">
        <h2>Quel est votre parcours ?</h2>
        <h3>Écrivez au moins 40 mots</h3>
        <textarea resize="none"></textarea>
      </div>
      <NextButton />
    </div>
  );
};

export default Page8;
