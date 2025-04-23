
import React from "react";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import "../style/Profile.css";

function Profile() {
  const navigate = useNavigate();

  const logout = () => {
    auth.signOut();
    navigate("/signup");
    navigate("/");
  };

  return (
    <div className="profile-container">
      <h3>Welcome to Your Profile!!</h3>
      <h2>{auth.currentUser?.email}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;
