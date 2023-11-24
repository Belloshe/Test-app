import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputComponent from '../components/input/index';

describe('InputComponent', () => {
  it('renders input correctly', () => {
    const { getByRole } = render(<InputComponent />);
    const inputElement = getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('updates value on change', () => {
    const { getByRole } = render(<InputComponent />);
    const inputElement = getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'Test input' } });
    expect(inputElement.value).toBe('Test input');
  });

  it('handles empty initial value', () => {
    const { getByRole } = render(<InputComponent />);
    const inputElement = getByRole('textbox');
    expect(inputElement.value).toBe('');
  });

  it('renders with placeholder', () => {
    const { getByPlaceholderText } = render(
      <InputComponent placeholder="Enter text" />
    );
    const inputElement = getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();
  });

});
