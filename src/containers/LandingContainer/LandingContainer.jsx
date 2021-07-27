import React from 'react'
import Carrousel from '../../components/Carrousel';
import FeaturedProducts from '../../components/FeaturedProducts';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const LandingContainer = () => {
  return (
    <div>
      <Carrousel />
      <FeaturedProducts />
      <About />
      <Contact />
      <Footer />
    </div>
  )
};

export default LandingContainer;

