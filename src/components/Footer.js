import React from "react";
import "../style/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <h3>Explore the World with Us</h3>
      </div>
      <hr />
      <div className="footer-contact">
        <h4>Contact Us</h4>
        <p>
          📍 123 Parthasarathy Street, Chennai City | 📧
          <a href="mailto:info@travelworld.com">info@travelworld.com</a> | 📞
          <a href="tel:+911111211234">+91 111-121-1234</a>
        </p>
      </div>
      <div className="footer-bottom">
        <p>© TravelWebsite 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
