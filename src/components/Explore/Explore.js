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
                  <input type="text" placeholder="Search by NFT name" />
                  <div className="banner-search-icon">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
                <h4>Total Items: 51</h4>
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
          </div>
        </section>
      </div>
    </>
  );
};

export default Explore;
