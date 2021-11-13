import React, { useState } from "react";
import "./Explore.scss";
import NFT from "../NFT/NFT.js";

const Explore = () => {
  const [searchValue, setSearchValue] = useState("");

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
                    onChange={(event) => setSearchValue(event.target.value)}
                  />
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
            <NFT searchValue={searchValue} />
          </div>
        </section>
        <footer class="footer">
          <div class="footer-container">
            <div class="footer-row">
              <div class="footer-col">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <img src="SolSea-Footer.svg" alt="" />
                    <p>
                      The first open NFT marketplace on Solana that enables
                      creators to choose and embed licenses when they mint.
                    </p>
                  </div>
                </div>
              </div>
              <div class="footer-col"></div>
              <div class="footer-col">
                <div class="footer-widget d-flex">
                  <h3>Community</h3>
                  <ul>
                    <li>
                      <a
                        href="https://discord.gg/DXYtfjyAPE"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Discord
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/SolSeaNFT"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://allart.medium.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Medium
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="footer-col">
                <div class="footer-widget d-flex">
                  <h3>Documentation</h3>
                  <ul>
                    <li>
                      <a
                        href="https://docs.solsea.io/getting-started/terms-and-conditions"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Terms and Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.solsea.io/privacy-policy"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Privacy policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://all.art"
                        target="_blank"
                        rel="noreferrer"
                      >
                        All-Art Protocol
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="footer-col">
                <div class="footer-widget">
                  <h3>General</h3>
                  <ul>
                    <li>
                      <a
                        href="https://docs.solsea.io/getting-started/how-to-spot-a-fake-nft"
                        target="_blank"
                        rel="noreferrer"
                      >
                        How to spot fakes?
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.solsea.io/faq"
                        target="_blank"
                        rel="noreferrer"
                      >
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Explore;
