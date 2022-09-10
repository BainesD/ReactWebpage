import React from "react";
import reactLogo from "../images/react-logo.png"

export default function NavBar() {
    return (
      <nav className="navbar navbar-dark">
        <a className="logo-text">
          <img
            className="logo-img"
            src={reactLogo}
          /> React Facts
        </a>
        <h4 className="nav-info">React Information Page</h4>
      </nav>
    );
  }