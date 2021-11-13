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
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchNFTData();
  }, []);

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
                  {data.length !== 0
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
          </div>
        </div>
      </section>
    </>
  );
};

export default NFTDetail;
