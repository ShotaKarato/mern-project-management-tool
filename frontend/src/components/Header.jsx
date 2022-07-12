import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

const Header = () => {
  return (
    <nav className="navbar-brand bg-light mb-4 p-0">
      <div className="container">
        <Link to="/" className="navbar-link">
          <div className="d-flex align-item-center">
            <img src={logo} alt="logo" className="mr-2" />
            <div>ProjectMgmt</div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
