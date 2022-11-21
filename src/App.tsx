import React from 'react';
import Query from './components/Query/query.component';
import SearchResults from './components/SearchResults/searchResults.component';
import Search from './components/Search/search.component';
import useSearch from './hooks/Search.hook';

function App() {
  const {
    handleFetch,
    handleNext,
    handlePrev,
    currentPage,
    setQuery,
    query,
    queryString,
    data,
    previousMarks,
  } = useSearch();

  return (
    <main>
      <Search setQuery={setQuery} length={query.length} />
      <Query query={queryString} onClick={() => handleFetch()} />
      <SearchResults
        data={data}
        page={currentPage}
        onNext={handleNext}
        onPrev={handlePrev}
        isNext={data && !!data.nextCursorMark}
        isPrev={!!previousMarks.length}
      />
    </main>
  );
}

export default App;
