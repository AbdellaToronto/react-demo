import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MyCard } from "./card.component";


test('Card should take name prop and display it', () => {
  const { getByText } = render(<MyCard name="foo" content="bar" clickFunc={() => null} />);
    expect(getByText(/foo/i)).toBeInTheDocument();
});


test('Card should handle click', () => {
  const spy = jest.fn();
  const { getByText } = render(<MyCard name="something" content="bar" clickFunc={spy} />);

  fireEvent.click(getByText(/Click Me!!/));
  expect(spy).toHaveBeenCalled();
});
