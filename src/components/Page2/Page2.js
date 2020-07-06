import React, { useContext } from "react";
import NextButton from "../NextButton/NextButton";
import { ProgressContext } from "../../contexts/ProgressContext";

const Page2 = (props) => {
  const Data = useContext(ProgressContext);
  return (
    <div>
      <div className="pageTwoContent">
        <h2>Super un.e nouveau.elle {Data.job} </h2>
        <h3>Optionnel : Ajoutez des compétences associées </h3>
        <section>
          <ul className="skillsList">
            <li>Figma</li>
            <li>Atomic Design</li>
            <li>Sketch</li>
            <li>Photoshop</li>
            <li>UX Design</li>
            <li>Lightroom</li>
          </ul>
        </section>
      </div>
      <NextButton />
    </div>
  );
};

export default Page2;
