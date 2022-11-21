import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Response, Result as ResultType } from '../types';
import SearchResults from '../components/SearchResults/searchResults.component';

const obj = {
  id: '36335422',
  pmid: '36335422',
  title:
    "Clinical characteristics of cat sensitized adults, cat ownership and cat owners' attitudes.",
  authorString: 'Gültuna S.',
  journalTitle: 'Allergy Asthma Proc',
  issue: '6',
  journalVolume: '43',
  citedByCount: 0,
  firstPublicationDate: '2022-11-01',
} as ResultType;

const onPrev = jest.fn();
const onNext = jest.fn();

const data = {
  request: {
    cursorMark: '*',
  },
  hitCount: 4000,
  nextCursorMark: 'Aoff//ssdf',
  resultList: {
    result: [obj],
  },
} as Response;

const renderSearchResults = (
  page: number,
  isPrev?: boolean,
  isNext?: boolean,
) => {
  render(
    <SearchResults
      page={page}
      onPrev={onPrev}
      onNext={onNext}
      isPrev={isPrev}
      isNext={isNext}
      data={data}
    />,
  );
  expect(screen.getByText('Search results')).toBeInTheDocument();
  expect(
    screen.queryByText('Enter a search term to view results'),
  ).not.toBeInTheDocument();
  expect(screen.getByRole('list')).toBeInTheDocument();
};

test('should render the default search result component', async () => {
  render(<SearchResults page={1} onPrev={onPrev} onNext={onNext} />);
  expect(screen.getByText('Search results')).toBeInTheDocument();
  expect(
    screen.getByText('Enter a search term to view results'),
  ).toBeInTheDocument();
  expect(screen.queryByRole('list')).not.toBeInTheDocument();
});

test('should disable the previous button when no marker to previous request', async () => {
  renderSearchResults(1, false);
  const prevButton = screen.getByTestId('prev');
  expect(prevButton).toBeDisabled();
  fireEvent.click(prevButton);
  expect(onPrev).not.toHaveBeenCalled();
});

test('should enable the previous button when marker to previous request is present', async () => {
  renderSearchResults(1, true);
  const prevButton = screen.getByTestId('prev');
  expect(prevButton).not.toBeDisabled();
  fireEvent.click(prevButton);
  expect(onPrev).toHaveBeenCalled();
});

test('should disable the next button when no marker to next request', async () => {
  renderSearchResults(1, undefined, false);
  const nextButton = screen.getByTestId('next');
  expect(nextButton).toBeDisabled();
  fireEvent.click(nextButton);
  expect(onNext).not.toHaveBeenCalled();
});

test('should enable the next button when marker to next request is present', async () => {
  renderSearchResults(1, undefined, true);
  const nextButton = screen.getByTestId('next');
  expect(nextButton).not.toBeDisabled();
  fireEvent.click(nextButton);
  expect(onNext).toHaveBeenCalled();
});

test('should render correct current data rows and total hits', async () => {
  const page = 3;
  renderSearchResults(page);
  const test = screen.getByTestId('page-content');
  expect(test).toHaveTextContent(
    `${page * 25 - 24} - ${page * 25} of ${data.hitCount.toLocaleString()}`,
  );
});
