import { render, screen } from '@testing-library/react';
import App from '../App';
import axios from 'axios';
import GlobalStyle from '../globalStyle';
import React from 'react';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('should render the correct snapshot of the landing page', () => {
  mockedAxios.get.mockResolvedValueOnce([]);
  const { container } = render(
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>,
  );
  expect(screen.getByText('Advanced search builder')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
