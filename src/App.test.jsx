import { render, screen } from '@testing-library/react';
import App from './App';

test('renders invitation headline', () => {
  render(<App />);
  const title = screen.getByText(/You're Invited!/i);
  expect(title).toBeInTheDocument();
});
