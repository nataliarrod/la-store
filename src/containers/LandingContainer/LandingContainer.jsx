import React from 'react'
import Carousel from '../../components/Carousel';
import FeaturedProducts from '../../components/FeaturedProducts';
import About from '../../components/About';
import Contact from '../../components/Contact';

const LandingContainer = () => {
  return (
    <div data-testid="landing-container">
      <Carousel />
      <FeaturedProducts />
      <About />
      <Contact />
    </div>
  )
};

export default LandingContainer;

