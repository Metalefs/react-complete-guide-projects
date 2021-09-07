import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Adicionar usuário button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Adicionar usuário/i);
  expect(linkElement).toBeInTheDocument();
});
