import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';

const product = {
  _id: '12345',
  name: 'test product',
  price: '25000',
  stock: '10',
  url: 'https://img.favpng.com/24/1/14/test-case-logo-software-testing-engineering-use-case-png-favpng-6eTyq7U0v5mmDsfZB8BeG0MgV.jpg',
};

describe('Product Card Component', () => {
  afterEach(cleanup);

  test('render elements of the product card', () => {
    const container = render(<ProductCard isListProduct product={product}/>)
    const input = container.getByDisplayValue(0);
  
    fireEvent.change(input, { target: { value: "5" } });
    expect(input.value).toBe("5");
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(`$ ${product.price}`)).toBeInTheDocument();
    expect(screen.getByAltText('foto del producto')).toBeInTheDocument();
  });

  test('set new quantity in the product card', () => {
    const container = render(<ProductCard isListProduct product={product}/>)
    const quantityInput = container.getByDisplayValue(0);
  
    fireEvent.change(quantityInput, { target: { value: "5" } });
    expect(quantityInput.value).toBe("5");
  });

  test('increase the product quantity', () => {
    const container = render(<ProductCard isListProduct product={product}/>)

    const increaseButton = container.getByLabelText("icono agregar productos");
    const quantityInput = container.getByDisplayValue(0);

    fireEvent.click(increaseButton);
    expect(quantityInput.value).toBe("1");
  })

  test('decrease the product quantity', () => {
    const container = render(<ProductCard isListProduct product={product}/>)

    const decreaseButton = container.getByLabelText("icono remover productos");
    const quantityInput = container.getByDisplayValue(0);
  
    fireEvent.change(quantityInput, { target: { value: "2" } });
    fireEvent.click(decreaseButton);
    expect(quantityInput.value).toBe("1");
  })
})
