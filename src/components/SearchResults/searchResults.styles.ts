import styled from 'styled-components';

export const Root = styled.section({
  padding: 20,
  width: '100%',
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

  '.caption': {
    fontSize: '0.8rem',
    fontWeight: 'normal',
    color: '#4A4A4A',
  },

  '.button-group': {
    display: 'flex',
    button: {
      backgroundColor: 'transparent',
      color: '#1F699C',
      fontWeight: 'bold',
    },
    'button:hover': {
      cursor: 'pointer',
    },
    'button:disabled': {
      color: '#D4E6F1',
      cursor: 'not-allowed',
    },
  },

  '.divider': {
    height: 4,
    backgroundColor: '#D4E6F1',
    width: '100%',
  },
  '.list': {
    width: '100%',
    listStyleType: 'none',
  },

  '.search-summary': {
    marginBottom: 5,
    marginTop: 20,
    p: {
      fontSize: '0.8rem',
      fontWeight: 'normal',
      margin: 0,
    },
    display: 'flex',
    justifyContent: 'space-between',
  },
});
