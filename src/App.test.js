import { render, screen } from '@testing-library/react';
import App from './App';

test('dummy test for pipeline pass', () => {
  render(<App />);
  const linkElement = screen.getByText(/Accounts/i);
  expect(linkElement).toBeInTheDocument();
});
