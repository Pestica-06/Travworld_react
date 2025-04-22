import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import data from "../data/packages.json";
import "../style/TourDetails.css";

function TourDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tour = data.tours[id];

  if (!tour) return <h2>Tour Not Found</h2>;

  const handleBooking = () => {
    const { title, price, duration, description, image } = tour;
    localStorage.setItem(
      "selectedTour",
      JSON.stringify({
        title,
        price,
        duration,
        description: description,
        image: image,
      })
    );
    navigate("/booking");
  };

  return (
    <section>
      <div className="tour-details">
        <h1>{tour.title}</h1>
        <img
          src={tour.image}
          alt={tour.title}
          style={{ width: "100%", maxWidth: "600px" }}
        />
        <p>
          <strong>Description:</strong> {tour.description}
        </p>
        <p>
          <strong>Duration:</strong> {tour.duration}
        </p>
        <p>
          <strong>Best Time to Visit:</strong> {tour.bestTime}
        </p>

        {/* Itinerary */}
        {tour.itinerary && (
          <>
            <h2>Itinerary</h2>
            <ul>
              {tour.itinerary.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {/* Button */}
        <div style={{ marginTop: "1rem" }}>
          <button onClick={handleBooking}>Book Now</button>
        </div>

        <br />
        <Link to="/">← Back to All Tours</Link>
      </div>
    </section>
  );
}

export default TourDetails;
