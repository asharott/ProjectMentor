import React, { useContext } from "react";
import { ProgressContext } from "../../contexts/ProgressContext";
import Page1 from "../Page1/Page1";
import Page2 from "../Page2/Page2";
import Page3 from "../Page3/Page3";
import Page4 from "../Page4/Page4";
import Page5 from "../Page5/Page5";
import Page6 from "../Page6/Page6";
import Page7 from "../Page7/Page7";
import Page8 from "../Page8/Page8";
import Page9 from "../Page9/Page9";
import Page10 from "../Page10/Page10";

const Content = (props) => {
  const { percentage } = useContext(ProgressContext);
  const handlePages = (percentage) => {
    switch (percentage) {
      case 10:
        return <Page1 />;
      case 20:
        return <Page2 />;
      case 30:
        return <Page3 />;
      case 40:
        return <Page4 />;
      case 50:
        return <Page5 />;
      case 60:
        return <Page6 />;
      case 70:
        return <Page7 />;
      case 80:
        return <Page8 />;
      case 90:
        return <Page9 />;
      case 100:
        return <Page10 />;
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
