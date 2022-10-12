import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RPList from './rp-list.jsx';
import '@testing-library/jest-dom/extend-expect';

describe("Related Products list", function () {
  test("return the string, RPList, to the virtual dom", async () => {
    render(<RPList />);
    const text = screen.getByTestId("rpList");
    console.log('innerHTML', text.innerHTML);
    expect(text).toHaveTextContent("rpList");
  });
});