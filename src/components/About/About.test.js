import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import About from './About';

describe('About Component', () => {
  afterEach(cleanup);

  test('render elements of the about', () => {
    render(<About/>)

    expect(screen.getByText("sobre mí")).toBeInTheDocument();
    expect(screen.getByAltText('imagen diana rodriguez')).toBeInTheDocument();
    expect(screen.getByTestId('about-text')).toBeInTheDocument();
  });
})
