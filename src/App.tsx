import React from "react";
import { Router } from "@reach/router";
import Home from "page/index/home";
import About from "page/about/index";
const App = () => {
  return (
    <Router>
      <Home path="/" />
      <About path="/about/:uid" />
    </Router>
  );
};

export default App;
