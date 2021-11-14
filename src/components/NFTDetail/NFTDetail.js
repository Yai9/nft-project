import React, { useState, useEffect } from "react";
import Loader from "../../UI/Loader/Loader.js";
import Button from '../../UI/Button/Button.js';
import { useParams } from "react-router-dom";

import "./NFTDetail.scss";

const NFTDetail = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  const fetchNFTData = async () => {
    const response = await fetch(`https://test-api.solsea.io/fetch-nft/${id}`);

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchNFTData();
  }, []);

  let displayData = (
    <div className="nft-loader">
      <Loader />
    </div>
  );



  if (data.length !== 0) {
    displayData = (
      <section className="nft-detail">
        <div className="nft-detail-container">
          <div className="nft-detail-row-wrapper">
            <div className="first-container">
              <div className="image-container">
                <img src={data.Preview_URL} />
              </div>
              <div className="info-container">
                <div className="traits-container">
                  {data.length !== 0 && data.Properties.attributes
                    ? data.Properties.attributes.map((trait) => (
                        <div key={trait.trait_item} className="trait-item">
                          <p className="trait-type">{trait.trait_type}</p>
                          <p className="trait-value">{trait.value}</p>
                        </div>
                      ))
                    : ""}
                </div>
              </div>
            </div>
            <div className="second-container">
              <div className="info-container">
                <div className="statistics-container">
                  <div className="statistics-item">
                    <i className="fa fa-eye me-1"></i> {data.views}
                  </div>
                  <div className="statistics-item">
                    <i className="fa me-1 fa-heart"></i> {data.liked}
                  </div>
                </div>
                <div className="info-items">
                  <h3>Creator</h3>
                  <p>
                    {data.Creators
                      ? "+ " + data.Creators.length + " Creators"
                      : ""}{" "}
                  </p>
                  <h1>{data.Title}</h1>
                  <div className="license-items">
                    <img src="badge.svg" />
                    <strong>License: </strong>
                    {data.License ? data.License : <p>None attached</p>}
                  </div>
                  <div>
                    <div className="collection-items">
                      {data.nft_collection ? (
                        <div className="collection-data">
                          <img src={data.Preview_URL} />
                          <div className="collection-desc">
                            <strong>{data.nft_collection.title}</strong>
                            <span>{data.nft_collection.description}</span>
                          </div>
                        </div>
                      ) : (
                        <p><strong>Not Part of a Collection</strong></p>
                      )}
                    </div>
                  </div>
                </div>
                {!data.verified ? (
                  <div className="not-verified-nft">
                    ⚠️ Unverified NFT - please check everything before you buy
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="info-container">
                <div className="listed-by">
                  <h4>Listed by:</h4>
                  <span>
                    {data.Creators.map((creator) =>
                      creator.address.substring(0, 20)
                    )}
                    ...
                  </span>
                </div>
                <div className="price-container">
                  <p>
                    <span>{data.price}</span> SOL
                  </p>
                </div>
	    <div className="connect-wallet-container">
	    <Button className="connect-wallet">Connect Your Wallet</Button>
	    </div>
              </div>
              <div className="info-container">
	    <div className="history-container">
	    <h3>History</h3>
	    <p>No history of sales on SolSea!</p>
	    </div>
	    </div>
            </div>
          </div>
        </div>
      </section>
    );
  }


  return <>{displayData}</>;
};

export default NFTDetail;
