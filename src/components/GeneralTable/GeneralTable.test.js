import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import GeneralTable from './GeneralTable';

const list = [
  {
    _id: '1',
    name: 'lampara',
    price: 20000,
    quantity: 10,
    url: 'https://img.favpng.com/24/1/14/test-case-logo-software-testing-engineering-use-case-png-favpng-6eTyq7U0v5mmDsfZB8BeG0MgV.jpg',
  },
];

describe('General Table Component', () => {
  afterEach(cleanup);

  const deleteItem = jest.fn();

  test('call delete item function', () => {
    const container = render(<GeneralTable list={list} deleteItem={deleteItem}/>);

    const deleteButton = container.getByLabelText("borrar");
  
    fireEvent.click(deleteButton);
    expect(deleteItem).toHaveBeenCalledTimes(1);;
  })

  test('render table header', () => {
    render(<GeneralTable list={list} deleteItem={deleteItem}/>);

    expect(screen.getByText("nombre")).toBeInTheDocument();
    expect(screen.getByText("precio")).toBeInTheDocument();
    expect(screen.getByText("cantidad")).toBeInTheDocument();
    expect(screen.getByText("subtotal")).toBeInTheDocument();
    expect(screen.getByText("acciones")).toBeInTheDocument();
  });

  test('render table rows', () => {
    render(<GeneralTable list={list} deleteItem={deleteItem}/>);

    expect(screen.getByText(list[0].name)).toBeInTheDocument();
    expect(screen.getByText(`$${list[0].price}`)).toBeInTheDocument();
    expect(screen.getByText(list[0].quantity)).toBeInTheDocument();
  });
})
