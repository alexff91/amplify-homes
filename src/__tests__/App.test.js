import { render, screen } from '@testing-library/react';
import App from '../App';

// Mock aws-amplify
jest.mock('aws-amplify', () => ({
  Amplify: { configure: jest.fn() },
  API: { graphql: jest.fn() },
  graphqlOperation: jest.fn(),
}));

jest.mock('@aws-amplify/ui-react', () => ({
  AmplifyProvider: ({ children }) => children,
}));

// Mock the useHomes hook to avoid async issues in tests
jest.mock('../hooks/useHomes', () => ({
  useHomes: () => ({
    homes: [
      {
        id: '1',
        address: '123 Test St',
        city: 'Testville',
        state: 'TX',
        price: 350000,
        bedrooms: 3,
        bathrooms: 2,
        squareFeet: 1800,
        propertyType: 'SINGLE_FAMILY',
        imageUrl: 'https://example.com/img.jpg',
      },
    ],
    loading: false,
    error: null,
    nextToken: null,
    refetch: jest.fn(),
  }),
}));

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getAllByText('Amplify Homes').length).toBeGreaterThan(0);
  });

  it('renders the header with search', () => {
    render(<App />);
    expect(screen.getByPlaceholderText(/search by city/i)).toBeInTheDocument();
  });

  it('renders the hero section', () => {
    render(<App />);
    expect(screen.getByText('Find Your Perfect Home')).toBeInTheDocument();
  });

  it('renders home listings', () => {
    render(<App />);
    expect(screen.getByText('Featured Listings')).toBeInTheDocument();
    expect(screen.getByText(/123 Test St/)).toBeInTheDocument();
    expect(screen.getByText('$350,000')).toBeInTheDocument();
  });

  it('renders the footer', () => {
    render(<App />);
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument();
  });
});
