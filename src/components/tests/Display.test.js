import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import Display from './../Display';
import fetchShow from '../../api/fetchShow';

jest.mock("../../api/fetchShow")

const testShow = {

    name: "Test Stranger Things",
    summary: "summary",
    seasons: [
    {id: '1', name: 'hello1', episodes: []},
    {id: '2', name: 'hello2', episodes: []}, 
    {id: '3', name: 'hello3', episodes: []}

]}

test("renders without error", () =>{
    render(<Display/>)
})

test('render display component without any props passed in', () => {
    render(<Display />);
    const display = screen.queryByText(/press to get show data/i);
    expect(display).toBeInTheDocument();
})

// test('when fetch button is pressed show component with display', async () => {
//     render(<Display show = {testShow}/>)
//     const button = screen.queryByRole('button')
//     userEvent.click(button)
//     await waitFor(() => {
//         const show = screen.queryAllByTestId('show-container')
//         expect(show).toBeTruthy()
//     })
// })

// test('when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data', async ()=>{
//     render(<Display show={testShow}/>);
//     const button = screen.queryByRole("button");
//     userEvent.click(button)
//     await waitFor(() => {
//         const show = screen.queryAllByTestId('show-container')
//         expect(show).toBeTruthy()
//     })
// });

// test('when the fetch button is pressed, this function is called', async ()=>{
//     render(<Display show={testShow}/>);
//     const button = screen.queryByRole("button");
//     userEvent.click(button)
//     await waitFor(() => {
//         const show = screen.queryAllByTestId('show-container')
//         expect(show).toBeTruthy()
//     })
// });









///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.