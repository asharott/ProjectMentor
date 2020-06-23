import React from "react";
import "./reset.css";
import "./header.css";
import "./main.css";
import Header from "./Components/Header";
import CoverPicture from "./Components/CoverPicture";
import Infos from "./Components/Infos";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <CoverPicture />
      <Infos />
      <Skills />
    </div>
  );
}

export default App;
