import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Query from '../components/Query/query.component';

const onClick = jest.fn();

test('should render default empty state of query component', async () => {
  render(<Query onClick={onClick} query="" />);
  const button = await screen.findByRole('button');
  expect(button).toBeDisabled();
  const query = await screen.findByTestId('query');
  expect(query).toBeEmptyDOMElement();
});

test('view button should be active when query is not empty', async () => {
  render(<Query onClick={onClick} query="cat" />);
  const button = await screen.findByRole('button');
  expect(button).not.toBeDisabled();
  const query = await screen.findByTestId('query');
  expect(query).toHaveTextContent('cat');
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalled();
});
