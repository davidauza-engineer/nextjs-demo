import { render, screen } from '@testing-library/react';
import About from './page';

describe('<About />', () => {
  beforeEach(() => {
    render(<About />);
  });

  it('renders the title correctly', () => {
    const title = screen.getByText('About Page');
    expect(title).toBeInTheDocument();
  });
});
