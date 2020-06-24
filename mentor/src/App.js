import React from "react";
import "./reset.css";
import "./header.css";
import "./main.css";
import Header from "./Components/Header";
import CoverPicture from "./Components/CoverPicture";
import Infos from "./Components/Infos";
import Skills from "./Components/Skills";
import Resume from "./Components/Resume";
import MentoringType from "./Components/MentoringType";
import MeetingType from "./Components/MeetingType";
import Experience from "./Components/Experience";
import Opinion from "./Components/Opinions";

function App() {
  return (
    <div className="App">
      <Header />
      <CoverPicture />
      <Infos />
      <Skills />
      <Resume />
      <MentoringType />
      <MeetingType />
      <Experience />
      <Opinion />
    </div>
  );
}

export default App;
