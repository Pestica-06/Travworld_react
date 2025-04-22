import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/images/profile_img.png";
import logo from "../assets/images/airplane-around-earth.png";
import "../style/Header.css";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="TravWorld Logo" />
          <h5>TravWorld</h5>
        </div>
        <div className="login-register">
          <Link to="/profile">
            <img src={profile} alt="Profile Icon" />
          </Link>
        </div>
        <button className="menu-icon">☰</button>
      </nav>
    </header>
  );
}

export default Header;
