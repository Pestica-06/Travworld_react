import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Payment.css";

function PaymentPage() {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("setPackages"));
    if (data) {
      setBookingData(data);
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleConfirmPayment = () => {
    alert("Payment Successful! 🎉");
    navigate("/");
  };

  if (!bookingData) return null;

  return (
    <section className="payment-page">
      <div className="payment-container">
        <h1 className="title">Secure Payment</h1>
        <div className="payment-form">
          <input type="text" placeholder="Card Number" />
          <div className="card-details">
            <input type="text" placeholder="MM/YY" />
            <input type="password" placeholder="CVV" />
          </div>
          <button onClick={handleConfirmPayment}>
            Pay ₹{bookingData.total}
          </button>
        </div>
      </div>
    </section>
  );
}

export default PaymentPage;
