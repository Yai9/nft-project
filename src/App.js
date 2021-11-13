import React from "react";
import Header from "./UI/Header/Header.js";
import Explore from "./components/Explore/Explore.js";
import NFTDetail from "./components/NFTDetail/NFTDetail.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/:id" element={<NFTDetail />} />
          <Route exact path="/" element={<Explore />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
