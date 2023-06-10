import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('first test',() => {
  it('2+2 should be true ', () => {
      const a =2 ;
      const b = 2 ;
      expect(a==b).toBeTruthy();
  })

  it('3 == 2 should be false ', () => {
    let a = 3 ;
    let b = 2 ;
    expect(a==b).toBe(false);
})
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

