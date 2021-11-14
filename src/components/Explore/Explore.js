import React, { useState, useRef, useCallback } from "react";
import NFT from "../NFT/NFT.js";
import { useFetchNFT } from "../../hooks/useFetchNFT.js";

import "./Explore.scss";

const Explore = () => {
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const { data, loading } = useFetchNFT(searchValue, pageNumber);
  const observer = useRef();

  const lastNFTItem = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPageNumber(1);
        }
      });
      if (node && observer) observer.current.observe(node);
    },
    [loading]
  );

  const searchValueHandler = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <div>
        <section className="explore-container">
          <div className="explore-items">
            <h1>Explore NFTs</h1>
            <div className="banner-items">
              <div className="banner-search-container">
                <div className="banner-search">
                  <input
                    type="text"
                    placeholder="Search by NFT name"
                    value={searchValue}
                    onChange={searchValueHandler}
                  />
                  <div className="banner-search-icon">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </div>
              <div className="filter-container">
                <div className="switches-group">
                  <div className="filters-switch">
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                    <span>SolSea</span>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                    <span>Verified</span>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                    <span>Incl. NSFW</span>
                  </div>
                  <div className="filters-group">
                    <div className="filter">
                      <span>Sort by...</span>
                    </div>
                    <div className="filter">
                      <span>Single/Collection</span>
                    </div>
                    <div className="filter">
                      <span>Filter by Tags</span>
                    </div>
                    <div className="filter">
                      <span>Select Licence</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="row">
          <div className="nft-container">
            <NFT
              searchValue={searchValue}
              data={data}
              lastItem={lastNFTItem}
              loading={loading}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Explore;
