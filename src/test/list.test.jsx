
import React from 'react';
import { render } from '@testing-library/react';
import List from '../components/List';

describe('List', () => {
  it('renders list with items', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const { getByText } = render(<List items={items} />);
    items.forEach((item) => {
      const itemElement = getByText(item);
      expect(itemElement).toBeInTheDocument();
    });
  });

  it('renders list as an unordered list', () => {
    const items = ['Item 1', 'Item 2'];
    const { container } = render(<List items={items} />);
    const listElement = container.querySelector('ul');
    expect(listElement).toBeInTheDocument();
  });
  
});
