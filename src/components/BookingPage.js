import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/BookingPage.css";

function BookingPage() {
  const navigate = useNavigate();
  const [tourData, setTourData] = useState(null);
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);
  const [travelDate, setTravelDate] = useState('');
  const [total, setTotal] = useState(0);
  const [error, setError] = useState('');

  const adultPrice = 500;
  const kidPrice = 250;

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('selectedTour'));
    if (stored) {
      setTourData(stored);
    } else {
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    const adultTotal = adults * adultPrice;
    const kidTotal = kids * kidPrice;
    setTotal(adultTotal + kidTotal);
  }, [adults, kids]);

  const isFutureDate = (dateStr) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selected = new Date(dateStr);
    return selected > today;
  };

  const handleBooking = () => {
    setError('');

    if (!isFutureDate(travelDate)) {
      setError('Please select a valid future date');
      return;
    }

    if (adults + kids < 1) {
      setError('Please select at least one traveler.');
      return;
    }

    if (adults + kids < 5) {
      setError('Minimum group size is 5 people.');
      return;
    }

    if (total < 1000) {
      setError('Total price must be at least 1000 Rs.');
      return;
    }

    const bookingDetails = {
      ...tourData,
      adults,
      kids,
      travelDate,
      total,
    };

    localStorage.setItem('setPackages', JSON.stringify(bookingDetails));
    navigate('/payment');
  };

  if (!tourData) return null;

  const today = new Date();
  const date = today.toISOString().split('T')[0]; // format: YYYY-MM-DD

  return (
    <section className="booking-page">
      <div className="header">
        <h1>Discover the World with Us</h1>
        <p>"The world is a book and those who do not travel read only one page."</p>
      </div>

      <div className="details">
        <h2>{tourData.title}</h2>
        {tourData.image && (
          <img
            src={tourData.image}
            alt={tourData.title}
            style={{ width: '100%', maxWidth: '600px' }}
          />
        )}
        <p><strong>Duration:</strong> {tourData.duration}</p>
        <p><strong>Price per Adult:</strong> ₹{adultPrice}</p>
        <p><strong>Price per Kid:</strong> ₹{kidPrice}</p>
        <p><strong>Description:</strong> {tourData.description}</p>
        <p><strong>Food:</strong> Included</p>
        <p><strong>Night Stay:</strong> Included</p>
        <p><strong>Group Size:</strong> Minimum 5 people</p>
      </div>

      <div className="bottom-section">
        <h2>Booking Summary</h2>

        <div className="price-calculator">
          <div>
            <label>Adults:</label>
            <input
              type="number"
              value={adults}
              min="0"
              onChange={(e) => setAdults(Number(e.target.value))}
            />
            <p>{adults} Adults = ₹{adults * adultPrice}</p>
          </div>

          <div>
            <label>Kids:</label>
            <input
              type="number"
              value={kids}
              min="0"
              onChange={(e) => setKids(Number(e.target.value))}
            />
            <p>{kids} Kids = ₹{kids * kidPrice}</p>
          </div>
        </div>

        <div className="date-selection">
          <label>Select Travel Date:</label>
          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            min={date} // disables past dates in date picker
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <h3>Total: ₹{total}</h3>
        <button className="book-btn" onClick={handleBooking}>Book</button>
      </div>

      <div className="footer">
        <p>&copy; 2024 Travel Booking. All Rights Reserved.</p>
      </div>
    </section>
  );
}

export default BookingPage;
