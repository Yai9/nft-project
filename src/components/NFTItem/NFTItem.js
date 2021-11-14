import React, { useContext } from "react";
import NFTContext from "../../context/nft-context.js";

import "./NFTItem.scss";

const NFTItem = (props) => {
  const ctx = useContext(NFTContext);

  const nftData = ctx.nftData;

  const showNFTDetailHandler = (mint) => {
    const nftItem = nftData.find((nft) => nft.mint === mint);
    window.location.pathname = `/${nftItem.mint}`;
  };

  return (
    <>
      <div
        className="nft-card"
        onClick={() => showNFTDetailHandler(props.mint)}
      >
        <div className="nft-wrapper">
          <div className="nft-item">
            <div className="nft-title">
              <h3>{props.title}</h3>
            </div>
            <div className="nft-image-container">
              <div className="nft-image-wrapper">
                <img src={props.image} />
              </div>
            </div>
            <div className="nft-price">{props.price.toFixed(2)} SOL</div>
            <div className="nft-license-views-container">
              <span>{props.license}</span>
              <span>{props.views}</span>
            </div>
            <div className="nft-minted-likes-container">
              <span></span>
              <span>{props.likes}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTItem;
