
import React from "react";
import picture from "../assets/images/pamban-bridge-.webp";
import "../style/Home.css";

function Hero({ searchTerm, setSearchTerm }) {
  return (
    <main>
      <div className="hero">
        <img src={picture} alt="Travel Banner" />
        <div className="hero-text">
          <h2>TravWorld</h2>
          <p>Let's Travel And Explore</p>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search destinations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="button">Search</button>
        </div>
      </div>
    </main>
  );
}

export default Hero;
