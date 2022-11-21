import { render } from '@testing-library/react';
import React from 'react';
import Result from '../components/Result/result.component';
import { Result as ResultType } from '../types';
import dayjs from 'dayjs';

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

test('should render a single result list', async () => {
  const { container } = render(<Result result={obj} />);
  expect(container).toHaveTextContent(obj.title);
  expect(container).toHaveTextContent(obj.authorString);
  expect(container).toHaveTextContent(obj.journalTitle);
  expect(container).toHaveTextContent(`${obj.journalVolume}(${obj.issue})`);
  expect(container).toHaveTextContent(
    dayjs(obj.firstPublicationDate).format('DD MMM YYYY'),
  );
  expect(container).toHaveTextContent(
    `Cited by: ${obj.citedByCount} articles | PMID: ${obj.pmid}`,
  );
});
