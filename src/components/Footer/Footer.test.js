import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  afterEach(cleanup);

  test('render elements of the footer', () => {
    render(<Footer/>);

    expect(screen.getByText("tienda")).toBeInTheDocument();
    expect(screen.getByText("girardot cundinamarca")).toBeInTheDocument();
    expect(screen.getByText("horarios")).toBeInTheDocument();
    expect(screen.getByText("l-v:8-5")).toBeInTheDocument();
    expect(screen.getByAltText('logo linea ancestral')).toBeInTheDocument();
  });

  test('render networks icons', () => {
    render(<Footer/>);

    expect(screen.getByAltText('logo linea ancestral')).toBeInTheDocument();
    expect(screen.getByLabelText('boton instagram')).toBeInTheDocument();
    expect(screen.getByLabelText('boton facebook')).toBeInTheDocument();
    expect(screen.getByLabelText('boton youtube')).toBeInTheDocument();
  });

  test('render icons buttons', () => {
    render(<Footer/>);

    expect(screen.getAllByRole('button')).toHaveLength(3);
  });
})
