import { render, act, screen, waitFor } from '@testing-library/react';
import FilmsHome from '../../../pages/films/index';
import { useRouter } from 'next/router';

// Mocking useRouter
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Mocking fetch request
// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      results: [
        { title: 'A New Hope' },
        { title: 'The Phantom Menace' },
      ],
    }),
  })
);

describe('FilmsHome', () => {
  it('renders films list', async () => {
    (useRouter as jest.Mock).mockReturnValue({
      query: {},
      push: jest.fn(),
    });

    await act(async () => {
      render(<FilmsHome />);
    });

    // Check if the films are rendered
    expect(screen.getByText('A New Hope')).toBeInTheDocument();
    expect(screen.getByText('The Phantom Menace')).toBeInTheDocument();
  });

  it('redirects if title query param is present', async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      query: { title: 'A New Hope' },
      push: mockPush,
    });

    render(<FilmsHome />);
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/films/?title=A New Hope');
    });
  });
});
