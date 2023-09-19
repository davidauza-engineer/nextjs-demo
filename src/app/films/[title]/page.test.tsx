import { render, screen } from '@testing-library/react';
import Title from 'my-next-app/app/films/[title]/page';

describe('Title', () => {

  it('renders the title correctly', () => {
    const mockParams = {
      name: 'Star%20Wars'
    };

    render(<Title params={mockParams} />);

    // Check if the title renders correctly with the decoded value
    expect(screen.getByText('Star Wars Details')).toBeInTheDocument();
  });

  it('renders correctly with different title', () => {
    const mockParams = {
      name: 'The%20Phantom%20Menace'
    };

    render(<Title params={mockParams} />);

    // Check if the title renders correctly with the decoded value
    expect(screen.getByText('The Phantom Menace Details')).toBeInTheDocument();
  });

});

