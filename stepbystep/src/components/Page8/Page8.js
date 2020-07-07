import React, { useContext } from "react";
import NextButton from "../NextButton/NextButton";
import { ProgressContext } from "../../contexts/ProgressContext";

const Page8 = (props) => {
  const { setResume } = useContext(ProgressContext);
  return (
    <div>
      <div className="pageEightContent">
        <h2>Quel est votre parcours ?</h2>
        <h3>Écrivez au moins 40 mots</h3>
        <textarea resize="none" onChange={(event) => setResume(event.target.value)}></textarea>
      </div>
      <NextButton />
    </div>
  );
};

export default Page8;
