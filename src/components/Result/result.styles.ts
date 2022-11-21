import styled from 'styled-components';

export const Root = styled.li({
  paddingTop: 10,
  paddingBottom: 10,
  width: '100%',
  borderBottom: '1px solid #dddddd',
  p: {
    margin: 0,
    color: '#1F699C',
    lineHeight: 1.5,
    fontWeight: 'normal',
  },
  '.title': {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  '.sub-title': {
    color: 'green',
    fontSize: '1rem',
  },
  '.info': {
    fontSize: '0.9rem',
  },
  '.default': {
    color: '#4A4A4A',
  },
});
