import React, { useContext } from "react";
import NextButton from "../NextButton/NextButton";
import { ProgressContext } from "../../contexts/ProgressContext";

const Page6 = (props) => {
  const { setCity } = useContext(ProgressContext);
  return (
    <div>
      <div className="pageSixContent">
        <h2>Dans quelle ville habitez-vous ?</h2>
        <input
          type="text"
          placeholder="Montreuil, Paris ..."
          onChange={(event) => setCity(event.target.value)}
        />
      </div>
      <NextButton />
    </div>
  );
};

export default Page6;
