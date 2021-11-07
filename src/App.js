import React from "react";
import Header from "./UI/Header/Header.js";
import Explore from "./components/Explore/Explore.js";

import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Explore />
    </>
  );
}

export default App;
