
import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('HeaderComponent', () => {
  it('renders header with title', () => {
    const { getByText } = render(<Header title="Test Title" />);
    const titleElement = getByText('Test Title');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders header tag', () => {
    const { container } = render(<Header title="Test Title" />);
    const headerElement = container.querySelector('header');
    expect(headerElement).toBeInTheDocument();
  });
  
});
