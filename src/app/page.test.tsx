import { render, screen } from '@testing-library/react';
import Home from './page';

describe('<Home />', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('renders the title correctly', () => {
    const title = screen.getByText('Home Page Star Wars');
    expect(title).toBeInTheDocument();
  });

  it('renders the "Films" link and points to the correct path', () => {
    const filmsLink = screen.getByText('Films');
    expect(filmsLink).toBeInTheDocument();
    expect(filmsLink.closest('a')).toHaveAttribute('href', '/films');
  });

  it('renders the "About" link and points to the correct path', () => {
    const aboutLink = screen.getByText('About');
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink.closest('a')).toHaveAttribute('href', '/about');
  });
});
