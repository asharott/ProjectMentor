import React from "react";
import "./index.css";
import ProgressBar from "./components/ProgressBar";
import ProgressContextProvider from "./contexts/ProgressContext";

function App() {
  return (
    <div className="App">
      <ProgressContextProvider>
        <ProgressBar />
      </ProgressContextProvider>
    </div>
  );
}

export default App;
