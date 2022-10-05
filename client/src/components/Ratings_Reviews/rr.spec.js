import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Reviews_List from './Reviews_List.jsx';
import '@testing-library/jest-dom/extend-expect';

describe("Reviews_List.jsx", function(){
  test("returns the string, 'Reviews_List', to the virtual dom", function(){
    render(<Reviews_List />);
    const text = screen.getByTestId("text");
    console.log('innerHTML', text.innerHTML);
    expect(text).toHaveTextContent("Reviews_List");
  });
});