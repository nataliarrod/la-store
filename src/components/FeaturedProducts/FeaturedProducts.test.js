import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import FeaturedProducts from './FeaturedProducts';

describe('FeaturedProducts Component', () => {
  afterEach(cleanup);

  test('render elements of the featured products', () => {
    render(
      <Router>
        <FeaturedProducts/>
      </Router>
    );

    expect(screen.getByText("productos destacados")).toBeInTheDocument();
    expect(screen.getByText("ver todos")).toBeInTheDocument();
  });
})
