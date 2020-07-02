import React, { useContext } from "react";
import { ProgressContext } from "../../contexts/ProgressContext";
import Page1 from "../Page1/Page1";

const Content = (props) => {
  const { percentage } = useContext(ProgressContext);
  const handlePages = (percentage) => {
    switch (percentage) {
      case 10:
        return <Page1 />;
      case 20:
        return "no";
      case 30:
        return "perhaps";
      default:
        return null;
    }
  };
  return (
    <div>
      <div className="spacer"></div>
      {handlePages(percentage)}
    </div>
  );
};

export default Content;
