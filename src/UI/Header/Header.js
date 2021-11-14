import React from "react";
import Button from "../Button/Button.js";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="header-items">
        <Link to="/">
          {" "}
          <img src="SolSea.svg" />
        </Link>
        <div className="nav-items">
          <Link to="/explore">Explore</Link>
          <Link to="">Create</Link>
          <Link to="">Calendar</Link>
          <Link to="">FAQ</Link>
          <Button>
            <Link to="/wallet">Connect wallet</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
