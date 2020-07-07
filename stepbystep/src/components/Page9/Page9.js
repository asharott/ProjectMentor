import React from "react";
import NextButton from "../NextButton/NextButton";

const Page9 = (props) => {
  return (
    <div>
      <div className="pageNineContent">
        <h2>Finalisez votre inscription </h2>
        <h3>Montrez nous votre plus beau profil 😍</h3>
        <input type="file" />
      </div>
      <NextButton />
    </div>
  );
};

export default Page9;
