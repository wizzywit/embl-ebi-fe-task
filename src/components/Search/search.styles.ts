import styled from 'styled-components';

export const Root = styled.section({
  padding: 20,
  width: '100%',
  borderBottom: '1px solid #dddddd',
});

export const Container = styled.div({
  margin: '0 auto',
  maxWidth: 800,
  '@media (max-width: 768px)': {
    width: '100%',
  },
  '& h1': {
    margin: 10,
    color: '#4A4A4A',
    fontSize: '1rem',
  },
});

export const Header = styled.div({
  width: '100%',
  display: 'flex',
  padding: 10,
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#D4E6F1',
  p: {
    fontWeight: 'bold',
  },
});

export const Form = styled.form({
  padding: 10,
  width: '100%',
  label: {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  input: {
    border: '1px solid #8e8e8e',
    height: 30,
    fontSize: '1rem',
    width: '100%',
    padding: 10,
  },
  '.form-group': {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    gap: 20,
  },
  '.input-group': {
    width: '100%',
    display: 'flex',
    select: {
      height: 30,
      width: 150,
      border: '1px solid #8e8e8e',
      borderRight: 'none',
      paddingLeft: 10,
    },
  },
});
