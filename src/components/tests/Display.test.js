import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Display from '../Display';

const testShow = {
    name: "Elementary",
    summary: "Mysteries & a Detective",
    seasons: [
      { id: 0, name: "Season 1", episodes: [] },
      { id: 1, name: "Season 2", episodes: [] },
      { id: 2, name: "Season 3", episodes: [] },
      { id: 3, name: "Season 4", episodes: [] },
    ],
}

const displayData = (data)=> {
    console.log(data);
}

test('renders correctly without props', () => {
    render(<Display/>)
})

test('show component is showing', () => {
    render(<Display displayData={displayData}/> )
    const button = screen.getByRole('button');
    userEvent.click(button)
    const showDetails = screen.queryByTestId('show-container');
    expect(showDetails).toBeInTheDocument();
})

test('if options rendered equals total seasons', () => {
    render(<Display show={testShow}/>);
    const button = screen.getByRole('button');
    userEvent.click(button);
    const seasons = screen.findAllByTestId('season-options');
    expect(seasons).toHaveLength(4);
});

test ('test if optional function is being called', () => {
    const click = jest.fn();
    render(<Display handleClick={click}/>)
    const button = screen.getByRole('button');
    userEvent.click(button)
    waitFor(() => expect(click).toHaveBeenCalledTimes(1))
})










///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.