import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Payment.css";

function PaymentPage() {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("setPackages"));
    if (data) {
      setBookingData(data);
    } else {
      navigate("/");
    }
  }, [navigate]);


  const handleConfirmPayment = () => {
    setError("");

    if (!cardNumber || !expiryDate || !cvv) {
      setError("Please fill in all card details.");
      return;
    }

    if (cardNumber.length !== 16) {
      setError("Please enter a valid card number.");
      return;
    }

    if (cvv.length !== 3) {
      setError("Please enter a valid CVV.");
      return;
    }

    alert("Payment Successful! 🎉");
    navigate("/"); 
  };

  if (!bookingData) return null;

  return (
    <section className="payment-page">
      <div className="payment-container">
        <h1 className="title">Secure Payment</h1>
        
        <div className="booking-summary">
          <h2>Booking Details</h2>
          <p><strong>Tour Title:</strong> {bookingData.title}</p>
          <p><strong>Adults:</strong> {bookingData.adults}</p>
          <p><strong>Kids:</strong> {bookingData.kids}</p>
          <p><strong>Travel Date:</strong> {bookingData.travelDate}</p>
          <p><strong>Total Price:</strong> ₹{bookingData.total}</p>
        </div>

        <div className="payment-form">
          <h2>Enter Card Details</h2>
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <div className="card-details">
            <input
              type="text"
              placeholder="MM/YY"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
            <input
              type="password"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button onClick={handleConfirmPayment}>
            Pay ₹{bookingData.total}
          </button>
        </div>
      </div>
    </section>
  );
}

export default PaymentPage;
