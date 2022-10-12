import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import Reviews_List from './Reviews_List.jsx';
import Rating_Breakdown from './Rating_Breakdown.jsx';
import * as data from './data.json';

const server = setupServer(
  rest.get('/reviews/71697/125', (req, res, ctx) => {
    return res(ctx.status(200));
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe("Reviews_List.jsx", function(){
  test("loads two review tiles to the virtual dom", async() => {

    render(<Reviews_List reviews={data.results} totalReviews={data.count}/>);

    await waitFor(() => {screen.getByTestId('tiles')})

    expect(screen.getByTestId('tiles')).toHaveTextContent('Palatino');
  });
});

describe("Reviews_List.jsx", function(){
  test("loads two review tiles to the virtual dom", async() => {

    render(<Reviews_List reviews={data.results} totalReviews={data.count}/>);

    await waitFor(() => {screen.getByTestId('tiles')})

    expect(screen.getByTestId('tiles')).toHaveTextContent('Just really bad');
  });
});

describe("Reviews_Breakdown.jsx", function(){
  test("loads the average star rating for a specific product", async() => {

    render(<Rating_Breakdown rating={3.86}/>);

    await waitFor(() => {screen.getByTestId('star_rating')})

    expect(screen.getByTestId('star_rating')).toHaveTextContent('3.86');
  });
});


// describe("Reviews_List.jsx", function(){
//   test("loads two review tiles to the virtual dom", function(){
//     render(<Reviews_List />);
//     const text = screen.getByTestId("text");
//     console.log('innerHTML', text.innerHTML);
//     expect(text).toHaveTextContent("Total Reviews:");
//   });
// });
