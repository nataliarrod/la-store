import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import BannerStore from './BannerStore';

describe('BannerStore Component', () => {
  afterEach(cleanup);

  test('render elements of the footer', () => {
    render(<BannerStore/>);

    expect(screen.getByText("tienda virtual")).toBeInTheDocument();
    expect(screen.getByText("un mundo por resolver")).toBeInTheDocument();
    expect(screen.getByAltText('banner diana rodriguez')).toBeInTheDocument();
  });

})
