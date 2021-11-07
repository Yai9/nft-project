import React from "react";
import "./Explore.scss";

const Explore = () => {
  return (
    <>
      <div>
        <section className="explore-container">
          <div className="explore-items">
            <h1>Explore NFTs</h1>
            <div className="banner-items">
              <div className="banner-search-container">
                <div className="banner-search">
                  <input type="search" placeholder="Search by NFT name" />
                  <div className="banner-search-icon">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
                <h4>Total Items: 51</h4>
              </div>
              <div className="filter-container">
                <div className="switches-group"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Explore;
