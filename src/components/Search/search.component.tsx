import * as StyledComponents from './search.styles';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import Button from '../Button/button.component';
import React, { FormEventHandler, useState } from 'react';

type Select = 'OR' | 'AND' | 'NOT';
interface OwnProps {
  setQuery: React.Dispatch<React.SetStateAction<string[]>>;
  length: number;
}
const Search = ({ length, setQuery }: OwnProps) => {
  const [term, setTerm] = useState('');
  const [operator, setOperator] = useState<Select>('OR');

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (length === 1) {
      setQuery((pre) => [...pre, operator, term]);
    } else {
      setQuery([term]);
    }

    setTerm('');
    setOperator('OR');
  };

  return (
    <StyledComponents.Root>
      <StyledComponents.Container>
        <h1>Advanced search builder</h1>
        <StyledComponents.Header>
          <p>Add keyword or phrase</p>
          <MdOutlineArrowDropDown />
        </StyledComponents.Header>
        <StyledComponents.Form onSubmit={handleSubmit} role="search">
          <label htmlFor="term">Enter term or phrase:</label>
          <div className="form-group">
            <div className="input-group">
              {length === 1 && (
                <select
                  aria-label="select operator"
                  value={operator}
                  onChange={({ target }) => setOperator(target.value as Select)}
                >
                  <option value="OR" data-testid="select-option">
                    OR
                  </option>
                  <option value="AND" data-testid="select-option">
                    AND
                  </option>
                  <option value="NOT" data-testid="select-option">
                    NOT
                  </option>
                </select>
              )}
              <input
                id="term"
                type="search"
                aria-label="Enter term or phrase"
                aria-required="true"
                value={term}
                onChange={({ target }) => setTerm(target.value)}
              />
            </div>
            <Button type="submit" disabled={!term}>
              Add
            </Button>
          </div>
        </StyledComponents.Form>
      </StyledComponents.Container>
    </StyledComponents.Root>
  );
};

export default Search;
