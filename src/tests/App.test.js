import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('renders h2 title elements', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const h2TitleElements = screen.getAllByRole('heading', { level: 2, name: /Little Lemon/i });
  h2TitleElements.forEach((h2TitleElement) => {
    expect(h2TitleElement).toBeInTheDocument();
  })
});
