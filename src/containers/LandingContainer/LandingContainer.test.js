import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import LandingContainer from './LandingContainer';

describe('LandingContainer Component', () => {
  afterEach(cleanup);

  test('render the root of landing container', () => {
    render(
      <Router>
        <LandingContainer/>
      </Router>
    )

    expect(screen.getByTestId('landing-container')).toBeInTheDocument();
  });
})
