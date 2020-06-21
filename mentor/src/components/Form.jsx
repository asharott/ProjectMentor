import React from "react";
import { useContext } from "react";
import { ProgressContext } from "../contexts/ProgressContext";
import { useEffect } from "react";

const Form = (props) => {
  const percentage = useContext(ProgressContext);
  const renderSwitch = (percentage) => {
    switch (percentage) {
      case percentage > 20:
        return "bar";
      default:
        return "foo";
    }
  };
  return renderSwitch(percentage);
};

export default Form;
