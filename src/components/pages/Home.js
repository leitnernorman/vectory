import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Contact from '../Contact';
// import Review from '../Review';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Contact />
      {/* <Review /> */}
      <Footer />
    </>
  );
}

export default Home;
