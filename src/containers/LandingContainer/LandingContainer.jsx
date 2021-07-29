import React from 'react'
import Carrousel from '../../components/Carrousel';
import FeaturedProducts from '../../components/FeaturedProducts';
import About from '../../components/About';
import Contact from '../../components/Contact';

const LandingContainer = () => {
  return (
    <div>
      <Carrousel />
      <FeaturedProducts />
      <About />
      <Contact />
    </div>
  )
};

export default LandingContainer;

