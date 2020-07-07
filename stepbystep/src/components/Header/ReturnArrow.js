import React, { useContext } from "react";
import returnArrow from "./Assets/Arrow.png";
import { ProgressContext } from "../../contexts/ProgressContext";

const ReturnArrow = (props) => {
  const { decreasePercentage } = useContext(ProgressContext);
  return (
    <div className="returnArrowContainer">
      <img src={returnArrow} onClick={() => decreasePercentage()} alt="back" />
    </div>
  );
};

export default ReturnArrow;
