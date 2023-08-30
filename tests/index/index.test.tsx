import { render, screen } from '@testing-library/react'
import Home from '../../src/app/page';

describe('Home', () => {
  it('renders a heading', () => {
    const { container } = render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Docs ->/i,
    });

    expect(heading).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  })
})
