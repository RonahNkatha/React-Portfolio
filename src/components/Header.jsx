import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Ronah Nkatha</Link>
      </h1>
      <Navigation />
    </header>
  );
};

export default Header;
