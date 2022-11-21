import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Search from '../components/Search/search.component';

const setQuery = jest.fn();

const checkDefaultState = async () => {
  const input = (await screen.findByLabelText(
    'Enter term or phrase',
  )) as HTMLInputElement;
  expect(input.value).toBe('');
  const button = await screen.findByRole('button');
  expect(button).toBeDisabled();
};

test('should render default state of filter component', async () => {
  render(<Search length={0} setQuery={setQuery} />);
  await checkDefaultState();
});

test('should call setQuery when input field is filled and added to query builder', async () => {
  render(<Search length={0} setQuery={setQuery} />);
  const input = (await screen.findByLabelText(
    'Enter term or phrase',
  )) as HTMLInputElement;
  expect(input.value).toBe('');
  fireEvent.change(input, { target: { value: 'cat' } });
  const button = await screen.findByRole('button');
  fireEvent.click(button);
  expect(setQuery).toHaveBeenCalled();
  expect(setQuery).toHaveBeenCalledWith(['cat']);
  await checkDefaultState();
});

test('should call setQuery when input field is typed with default OR operator', async () => {
  render(<Search length={1} setQuery={setQuery} />);
  const select = (await screen.findByLabelText(
    'select operator',
  )) as HTMLSelectElement;
  expect(select.value).toBe('OR');

  let options = screen.getAllByTestId('select-option') as HTMLOptionElement[];
  expect(options[0].selected).toBeTruthy();
  expect(options[1].selected).toBeFalsy();
  expect(options[2].selected).toBeFalsy();

  const input = (await screen.findByLabelText(
    'Enter term or phrase',
  )) as HTMLInputElement;
  expect(input.value).toBe('');
  fireEvent.change(input, { target: { value: 'dog' } });
  const button = await screen.findByRole('button');
  fireEvent.click(button);
  expect(setQuery).toHaveBeenCalled();
  expect(setQuery).toHaveBeenCalledWith(expect.any(Function));
  await checkDefaultState();
});

test('should call setQuery when input field is typed with selected AND operator', async () => {
  render(<Search length={1} setQuery={setQuery} />);
  const select = await screen.findByLabelText('select operator');
  fireEvent.change(select, { target: { value: 'AND' } });

  const changedSelect = (await screen.findByLabelText(
    'select operator',
  )) as HTMLSelectElement;
  expect(changedSelect.value).toBe('AND');

  let options = screen.getAllByTestId('select-option') as HTMLOptionElement[];
  expect(options[0].selected).toBeFalsy();
  expect(options[1].selected).toBeTruthy();
  expect(options[2].selected).toBeFalsy();

  const input = (await screen.findByLabelText(
    'Enter term or phrase',
  )) as HTMLInputElement;
  expect(input.value).toBe('');
  fireEvent.change(input, { target: { value: 'dog' } });
  const button = await screen.findByRole('button');
  fireEvent.click(button);
  expect(setQuery).toHaveBeenCalled();
  expect(setQuery).toHaveBeenCalledWith(expect.any(Function));
  await checkDefaultState();
});
