import * as StyledComponents from './result.styles';
import dayjs from 'dayjs';
import { Result as ResultType } from '../../types';

interface OwnProps {
  result: ResultType;
}
const Result = ({ result }: OwnProps) => {
  return (
    <StyledComponents.Root role="listitem">
      <p className="title">{result.title}</p>
      <p className="sub-title">{result.authorString}</p>
      <p className="info">
        {result.journalTitle}
        <span className="default">
          , {result.journalVolume}({result.issue}):{result.pageInfo},{' '}
          {dayjs(result.firstPublicationDate).format('DD MMM YYYY')}
        </span>
      </p>
      <p className="info">
        Cited by: {result.citedByCount} articles
        {result?.pmid && ` | PMID: ${result?.pmid}`}
        {result?.pmcid && ` | PMCID: ${result?.pmcid}`}
      </p>
    </StyledComponents.Root>
  );
};

export default Result;
