import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonComponent from '../components/Button/index';

describe('ButtonComponent', () => {
  it('renders button correctly', () => {
    const { getByRole } = render(<ButtonComponent label="Click me" />);
    const buttonElement = getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('handles click event', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <ButtonComponent label="Click me" onClick={onClick} />
    );
    const buttonElement = getByRole('button');
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders with custom label', () => {
    const { getByText } = render(<ButtonComponent label="Custom Label" />);
    const buttonElement = getByText('Custom Label');
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders disabled button', () => {
    const { getByRole } = render(<ButtonComponent label="Disabled" disabled />);
    const buttonElement = getByRole('button');
    expect(buttonElement).toBeDisabled();
  });

});
