import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./NFTDetail.scss";

const NFTDetail = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  const fetchNFTData = async () => {
    const response = await fetch(`https://test-api.solsea.io/nft-listed/${id}`);

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchNFTData();
  }, []);

  console.log(data, "data");

  return (
    <>
      <section className="nft-detail">
        <div className="nft-detail-container">
          <div className="nft-detail-row-wrapper">
            <div className="first-container">
              <div className="image-container">
                <img src={data.Preview_URL} />
                <div></div>
              </div>
              <div className="info-container">
                <div className="traits-container">
                  {data.length !== 0 && data.Properties.attributes
                    ? data.Properties.attributes.map((trait) => (
                        <div className="trait-item">
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
                  <p>+ {data.Properties.creators.length} Creators</p>
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
                        <strong>Not Part of a Collection</strong>
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
              <div className="info-container"></div>
              <div className="info-container"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NFTDetail;
