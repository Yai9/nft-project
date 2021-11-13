import React from "react";
import NFTContext from "../context/nft-context.js";

const contextData = () => {};

const NFTProvider = (props) => {
  <NFTContext.Provider value>{props.children}</NFTContext.Provider>;
};

export default NFTProvider;
