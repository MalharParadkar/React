import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <h1 className="navbar-title">
            <a href="/" id="brand-text">Malhar Paradkar</a>
          </h1>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <button>Download CV</button>
      </div>
    </nav>
  );
};

export default Navbar;
