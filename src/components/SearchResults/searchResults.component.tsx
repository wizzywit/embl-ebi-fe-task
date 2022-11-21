import * as StyledComponents from './searchResults.styles';
import React from 'react';
import Result from '../Result/result.component';
import { Response } from '../../types';

interface OwnProps {
  data?: Response;
  page: number;
  isNext?: boolean;
  isPrev?: boolean;
  onPrev: () => void;
  onNext: () => void;
}
const SearchResults = ({
  data,
  page,
  isPrev,
  isNext,
  onPrev,
  onNext,
}: OwnProps) => {
  return (
    <StyledComponents.Root>
      <StyledComponents.Container>
        <p>Search results</p>
        {data ? (
          <>
            <div className="search-summary">
              <p data-testid="page-content">
                {page * 25 - 24} - {page * 25} of{' '}
                <strong>{data.hitCount.toLocaleString()}</strong>
              </p>
              <div className="button-group">
                <button disabled={!isPrev} onClick={onPrev} data-testid="prev">
                  Prev
                </button>
                |
                <button disabled={!isNext} onClick={onNext} data-testid="next">
                  Next
                </button>
              </div>
            </div>
            <div className="divider" />
            <div role="list" className="list">
              {data.resultList.result.map((result) => (
                <Result result={result} key={result.id} />
              ))}
            </div>
          </>
        ) : (
          <p className="caption">Enter a search term to view results</p>
        )}
      </StyledComponents.Container>
    </StyledComponents.Root>
  );
};

export default SearchResults;
