import styled from 'styled-components';

export const Button = styled.button({
  minWidth: 100,
  backgroundColor: '#1F699C',
  cursor: 'pointer',
  color: 'white',
  whiteSpace: 'nowrap',
  width: 'fit-content',
  maxHeight: 30,

  '&:disabled': {
    backgroundColor: '#B1B4B6',
    cursor: 'not-allowed',
  },
});
