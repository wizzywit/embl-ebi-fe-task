export interface Result {
  title: string;
  authorString: string;
  journalTitle: string;
  journalVolume: string;
  issue: string;
  pageInfo: string;
  firstPublicationDate: string;
  citedByCount: number;
  pmid: string;
  pmcid: string;
  id: string;
}
export interface Response {
  request: {
    cursorMark: string;
  };
  hitCount: number;
  nextCursorMark: string;
  resultList: { result: Result[] };
}
