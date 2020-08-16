import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./scss/App.scss";
import { Router } from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
