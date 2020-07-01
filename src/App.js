import React from "react";
import "./Styles.scss";
import Header from "./Components/Header/Header";
import CoverPicture from "./Components/CoverPicture/CoverPicture";
import Infos from "./Components/Infos/Infos";
import Skills from "./Components/Skills/Skills";
import Resume from "./Components/Resume/Resume";
import MentoringType from "./Components/MentoringType/MentoringType";
import MeetingType from "./Components/MeetingType/MeetingType";
import Experience from "./Components/Experience/Experience";
import Opinion from "./Components/Opinions/Opinions";
import Contact from "./Components/Contact/Contact";
import Testfetch from "./Components/Testfetch";
import ProfileContextProvider from "./Contexts/ProfileContext";

function App() {
  return (
    <div className="App">
      <ProfileContextProvider>
        <Header />
        <CoverPicture />
        <Infos />
        <Skills />
        <Resume />
        <Testfetch />
        <MentoringType />
        <MeetingType />
        <Experience />
        <Opinion />
        <Contact />
      </ProfileContextProvider>
    </div>
  );
}

export default App;
