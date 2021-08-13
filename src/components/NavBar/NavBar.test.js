import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from './NavBar';

describe('Navigation Bar Component', () => {
  afterEach(cleanup);

  test('render app logo', () => {
    render(
      <Router>
        <NavBar/>
      </Router>
    );

    expect(screen.getByAltText('logo linea ancestral')).toBeInTheDocument();
  });

  test('render networks icons', () => {
    render(
      <Router>
        <NavBar/>
      </Router>
    );

    expect(screen.getByLabelText('icono de instagram')).toBeInTheDocument();
    expect(screen.getByLabelText('icono de facebook')).toBeInTheDocument();
    expect(screen.getByLabelText('icono de youtube')).toBeInTheDocument();
    expect(screen.getByLabelText('icono de carrito de compras')).toBeInTheDocument();
  });

  test('render icons buttons', () => {
    render(
      <Router>
        <NavBar/>
      </Router>
    );

    expect(screen.getAllByRole('button')).toHaveLength(5);
  });
})
