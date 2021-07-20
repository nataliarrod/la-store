import React from 'react'
import Carrousel from '../../components/Carrousel';
import NewArrivals from '../../components/NewArrivals';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const LandingContainer = () => {
  return (
    <div>
      <Carrousel />
      <NewArrivals />
      <About />
      <Contact />
      <Footer />
    </div>
  )
};

export default LandingContainer;

