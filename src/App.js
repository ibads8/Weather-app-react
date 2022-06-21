import "./App.css";
import Weather from "./Weather";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React!</h1>
        <Weather city="Tegucigalpa" />
      </header>
    </div>
  );
}

export default App;
