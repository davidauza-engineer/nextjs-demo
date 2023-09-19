import { render, screen, waitFor } from '@testing-library/react';
import Film from 'my-next-app/app/films/page';

fetchMock.enableMocks();

describe('Film', () => {

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('displays loading when fetching films', async () => {
    const mockResponse = {
      results: [
        {title: 'A New Hope'},
        {title: 'The Phantom Menace'}
      ]
    };

    // Mock the fetch response
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    render(<Film/>);

    // Check for the loading text
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for elements to appear
    await waitFor(() => {
      expect(screen.getByText('A New Hope')).toBeInTheDocument();
      expect(screen.getByText('The Phantom Menace')).toBeInTheDocument();
    });

    // Check the links
    expect(screen.getByText('A New Hope').closest('a')).toHaveAttribute('href', '/films/A New Hope');
    expect(screen.getByText('The Phantom Menace').closest('a')).toHaveAttribute('href', '/films/The Phantom Menace');
  });
});
