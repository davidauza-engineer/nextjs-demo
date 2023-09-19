import { render, screen } from '@testing-library/react';
import Title from './[title]';
import { useRouter } from 'next/router';

// Mocking useRouter
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Title', () => {
  it('renders title details', () => {
    // Mocking router query to return 'A New Hope' as title
    (useRouter as jest.Mock).mockReturnValue({
      query: { title: 'A%20New%20Hope' }
    });

    render(<Title />);

    // Check if the correct title is rendered
    expect(screen.getByText('A New Hope Details')).toBeInTheDocument();
  });
});
