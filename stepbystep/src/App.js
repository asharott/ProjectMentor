import React from "react";
import "./index.scss";
import ProgressContextProvider from "./contexts/ProgressContext";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="App">
      <ProgressContextProvider>
        <Header />
        <Content />
      </ProgressContextProvider>
    </div>
  );
}

export default App;
