// Import the necessary functions and modules from testing libraries
import { render, screen } from '@testing-library/react';

// Import the 'App' component that we want to test
import App from './App';

// Start a test case with a description
test('renders learn react link', () => {
  // Render the 'App' component
  render(<App />);

  // Find an element in the rendered component with the text 'learn react' (case insensitive)
  const linkElement = screen.getByText(/learn react/i);

  // Assert that the 'linkElement' is in the document (i.e., it's rendered)
  expect(linkElement).toBeInTheDocument();
});