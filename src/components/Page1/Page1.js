import React from "react";
import NextButton from "../NextButton/NextButton";

const Page1 = (props) => {
  return (
    <div>
      <div className="jobSearchSection">
        <h2>Quel est votre métier ?</h2>
        <input
          type="search"
          className="jobSearchBar"
          placeholder="Rentrez votre métier."
        ></input>
      </div>
      <NextButton />
    </div>
  );
};

export default Page1;
