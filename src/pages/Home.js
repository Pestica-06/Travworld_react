import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PopularPackages from '../components/PopularPackages';
import Features from '../components/Features';
import Welcome from '../components/Welcome';
import EnquiryForm from '../components/EnquiryForm';
import Footer from '../components/Footer';
import data from '../data/packages.json'; // ⬅️ import tour data

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter tours by title or description
  const filteredTours = data.tours.filter((tour) =>
    tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tour.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> {/* 🔁 Send search state */}
      <PopularPackages tours={filteredTours} /> {/* 🎯 Send filtered list */}
      <Features />
      <Welcome />
      <EnquiryForm />
      <Footer />
    </>
  );
}

export default Home;
