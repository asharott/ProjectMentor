import React, { useContext } from "react";
import NextButton from "../NextButton/NextButton";
import { ProgressContext } from "../../contexts/ProgressContext";

const Page1 = (props) => {
  const Data = useContext(ProgressContext);

  return (
    <div>
      <div className="jobSearchSection">
        <h2>Quel est votre métier ?</h2>
        <input
          required
          type="search"
          className="jobSearchBar"
          placeholder="Rentrez votre métier."
          onChange={(event) => Data.setJob(event.target.value)}
        ></input>
      </div>
      <NextButton />
    </div>
  );
};

export default Page1;
