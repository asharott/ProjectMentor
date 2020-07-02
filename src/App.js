import React from "react";
import "./index.scss";
import ProgressContextProvider from "./contexts/ProgressContext";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <ProgressContextProvider>
        <Header />
      </ProgressContextProvider>
    </div>
  );
}

export default App;
