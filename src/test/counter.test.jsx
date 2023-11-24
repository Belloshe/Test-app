
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CounterComponent from '../components/Counter/index';

describe('CounterComponent', () => {
  it('renders counter correctly', () => {
    const { getByText } = render(<CounterComponent />);
    const countElement = getByText('Count: 0');
    expect(countElement).toBeInTheDocument();
  });

  it('increments count on button click', () => {
    const { getByText } = render(<CounterComponent />);
    const incrementButton = getByText('Increment');
    fireEvent.click(incrementButton);
    const countElement = getByText('Count: 1');
    expect(countElement).toBeInTheDocument();
  });

});
