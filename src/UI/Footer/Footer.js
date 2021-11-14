import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-col">
              <div className="footer-widget">
                <div className="footer-logo">
                  <img src="SolSea-Footer.svg" alt="" />
                  <p>
                    The first open NFT marketplace on Solana that enables
                    creators to choose and embed licenses when they mint.
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-col"></div>
            <div className="footer-col">
              <div className="footer-widget d-flex">
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
            <div className="footer-col">
              <div className="footer-widget d-flex">
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
                    <a href="https://all.art" target="_blank" rel="noreferrer">
                      All-Art Protocol
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-col">
              <div className="footer-widget">
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
    </>
  );
};

export default Footer;
