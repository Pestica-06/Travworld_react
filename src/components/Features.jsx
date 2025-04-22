import React from "react";
import airplane from "../assets/images/airplane-around-earth.png";
import man from "../assets/images/man.png";
import destination from "../assets/images/destination.png";
import "../style/Features.css";
function Features() {
  return (
    <section className="features">
      <div className="feature">
        <img src={airplane} alt="Abroad Trips Icon" />
        <h3>Launching Inspiring Journeys</h3>
        <p>
          Embark on unique adventures crafted to ignite your wanderlust,
          tailored to your preferences.
        </p>
      </div>
      <div className="feature">
        <img src={man} alt="Handcrafted Experiences Icon" />
        <h3>Personalized Travel Experiences</h3>
        <p>
          Every itinerary is thoughtfully curated to match your travel dreams
          and preferences.
        </p>
      </div>
      <div className="feature">
        <img src={destination} alt="Happy Travellers Icon" />
        <h3>Extremely Happy Travellers</h3>
        <p>
          Our focus is on delighting customers with exceptional journeys,
          building trust as your travel partner.
        </p>
      </div>
    </section>
  );
}

export default Features;
