import * as StyledComponents from './query.styles';
import Button from '../Button/button.component';
import { MdSearch } from 'react-icons/md';

interface OwnProps {
  query: string;
  onClick: () => void;
}
const Query = ({ query, onClick }: OwnProps) => {
  return (
    <StyledComponents.Root>
      <StyledComponents.Container>
        <p>Search query</p>
        <div className="query-group">
          <div className="query" data-testid="query">
            {query}
          </div>
          <Button onClick={onClick} disabled={!query}>
            <StyledComponents.ButtonContent>
              <MdSearch />
              <div>View search result</div>
            </StyledComponents.ButtonContent>
          </Button>
        </div>
      </StyledComponents.Container>
    </StyledComponents.Root>
  );
};

export default Query;
