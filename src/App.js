import React from "react";
import "./Styles.scss";
import Header from "./Components/Header";
import CoverPicture from "./Components/CoverPicture";
import Infos from "./Components/Infos";
import Skills from "./Components/Skills";
import Resume from "./Components/Resume";
import MentoringType from "./Components/MentoringType";
import MeetingType from "./Components/MeetingType";
import Experience from "./Components/Experience";
import Opinion from "./Components/Opinions";
import Contact from "./Components/Contact";
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
