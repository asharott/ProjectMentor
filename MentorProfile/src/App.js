import React from "react";
import "./Styles.scss";
import Header from "./components/Header/Header";
import CoverPicture from "./components/CoverPicture/CoverPicture";
import Infos from "./components/Infos/Infos";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
import MentoringType from "./components/MentoringType/MentoringType";
import MeetingType from "./components/MeetingType/MeetingType";
import Experience from "./components/Experience/Experience";
import Opinion from "./components/Opinions/Opinions";
import Contact from "./components/Contact/Contact";
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
