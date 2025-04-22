// PopularTours.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "../style/PopularPackages.css";

function PopularTours({ tours }) {
  return (
    <section className="popular-tours">
      <h1>Popular Tours</h1>
      <div className="tour-container">
        {tours.length > 0 ? (
          tours.map((tour, index) => (
            <div key={index} className="tour-card">
              <img src={tour.image} alt={tour.title} />
              <h3>{tour.title}</h3>
              <p>{tour.description}</p>
              <p><strong>Duration:</strong> {tour.duration}</p>
              <p><strong>Best Time:</strong> {tour.bestTime}</p>
              <Link to={`/tours/${index}`}>View More</Link>
            </div>
          ))
        ) : (
          <p>No tours found for that search.</p>
        )}
      </div>
    </section>
  );
}

export default PopularTours;
