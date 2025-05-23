import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TourDetails from "./components/TourDetails";
import BookingPage from "./components/BookingPage";
import SignUp from "./pages/SignUp";
import Profile from "./components/Profile";
import { auth } from "./firebase/firebaseConfig";
import PaymentPage from "./components/Payment";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/profile" element={user ? <Profile /> : <SignUp />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
