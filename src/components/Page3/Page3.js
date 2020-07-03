import React, { useContext } from "react";
import NextButton from "../NextButton/NextButton";
import { ProgressContext } from "../../contexts/ProgressContext";

const Page3 = (props) => {
  const Data = useContext(ProgressContext);
  console.log(Data.job)
  return (
    <div>
      <div className="pageThreeContent">
        <h2>Depuis combien de temps êtes vous {Data.job} ?</h2>
      </div>
      <NextButton />
    </div>
  );
};

export default Page3;
