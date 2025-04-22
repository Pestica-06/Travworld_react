import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PopularPackages from "../components/PopularPackages";
import Features from "../components/Features";
import Welcome from "../components/Welcome";
import EnquiryForm from "../components/EnquiryForm";
import Footer from "../components/Footer";
import data from "../data/TourPackages.json";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredTours = data.tours.filter(
    (tour) =>
      tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />{" "}
      <PopularPackages tours={filteredTours} />
      <Features />
      <Welcome />
      <EnquiryForm />
      <Footer />
    </>
  );
}

export default Home;
