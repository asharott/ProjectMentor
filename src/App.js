import React from "react";
import "./index.css";
import ProgressBar from "./components/ProgressBar";
import ProgressContextProvider from "./contexts/ProgressContext";
import NextStepButton from "../src/components/NextStepButton";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <ProgressContextProvider>
        <ProgressBar />
        <NextStepButton />
        <Form/>
      </ProgressContextProvider>
    </div>
  );
}

export default App;
