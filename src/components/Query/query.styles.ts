import styled from 'styled-components';

export const Root = styled.section({
  padding: 20,
  width: '100%',
  borderBottom: '1px solid #dddddd',
});

export const Container = styled.div({
  paddingRight: 10,
  paddingLeft: 10,
  margin: '0 auto',
  maxWidth: 800,
  '@media (max-width: 768px)': {
    width: '100%',
  },
  p: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4A4A4A',
  },
  '.query-group': {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: 15,
    },
    gap: 20,
    '.query': {
      height: 70,
      flexBasis: '78%',
      border: '1px solid #8e8e8e',
      padding: 10,
      '@media (max-width: 768px)': {
        flexBasis: '100%',
      },
    },
  },
});

export const ButtonContent = styled.div({
  padding: 5,
  display: 'flex',
  gap: 5,
  alignItems: 'center',
  svg: {
    width: '2em',
  },
  '.text': {
    whiteSpace: 'nowrap',
  },
});
