import { useCallback, useState } from 'react';
import axios from 'axios';
import { Response } from '../types';

const useSearch = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [previousMarks, setPreviousMarks] = useState<string[]>([]);
  const [query, setQuery] = useState<string[]>([]);
  const queryString = query.join(' ');
  const [data, setData] = useState<Response | undefined>(undefined);

  const handleFetch = useCallback(
    (nextCursor?: string, isPagination?: boolean, callback?: () => void) => {
      if (query.length === 0) {
        setData(() => undefined);
        return;
      }
      let urlQuery = `(TITLE:"${queryString}")`;
      if (query.length === 3) {
        urlQuery = `(${query
          .map((q, i) => {
            if (i !== 1) {
              return `TITLE:"${q}"`;
            } else {
              return q;
            }
          })
          .join(' ')})`;
      }
      axios
        .get(
          `https://www.ebi.ac.uk/europepmc/webservices/rest/search?cursorMark=${
            nextCursor || '*'
          }`,
          {
            params: {
              query: urlQuery,
            },
          },
        )
        .then(({ data }) => {
          setData(() => ({ ...data }));
          if (!isPagination) {
            setPreviousMarks([]);
            setCurrentPage(1);
          }
          callback?.();
        })
        .catch(console.log);
    },
    [query, queryString],
  );

  const handleNext = useCallback(() => {
    if (data && data.nextCursorMark) {
      handleFetch(data?.nextCursorMark, true, () => {
        setPreviousMarks((prev) => [...prev, data.request.cursorMark]);
        setCurrentPage((cur) => cur + 1);
      });
    }
  }, [data, handleFetch]);

  const handlePrev = useCallback(() => {
    if (previousMarks.length) {
      handleFetch(previousMarks[previousMarks.length - 1], true, () => {
        setPreviousMarks((prev) => {
          let newV = [...prev];
          newV.pop();
          return [...newV];
        });
        setCurrentPage((cur) => cur - 1);
      });
    }
  }, [handleFetch, previousMarks]);

  return {
    handleFetch,
    handleNext,
    handlePrev,
    currentPage,
    setQuery,
    query,
    queryString,
    data,
    previousMarks,
  };
};

export default useSearch;
