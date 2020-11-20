import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import HomePage from '../pages/HomePage';
import ProductsList from '../components/ProductsList';

test('verify if button to add new product exists', () => {
  const page = render(<HomePage />);
  const linkElement = page.getByText(/Cadastrar Novo Produto/i);
  expect(linkElement).toBeInTheDocument();
});

test('verify if products are uploaded', () => {
  const page = render(<ProductsList list={[{productName: 'Bola', itemQuantity: 1, unitaryValue: 10.99, id: 0 }]} />);
  const productName = page.getByTestId("productName");
  const itemQuantity = page.getByTestId("itemQuantity");
  const unitaryValue = page.getByTestId("unitaryValue");
  expect(productName).toBeInTheDocument();
  expect(itemQuantity).toBeInTheDocument();
  expect(unitaryValue).toBeInTheDocument();
});
