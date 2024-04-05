import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Application } from "./components/application/application";
import { AppProviders } from "./providers/app-providers";

function App() {
  return (
    <AppProviders>
      <div className="App">{/* <Application /> */}</div>
    </AppProviders>
  );
}

export default App;
