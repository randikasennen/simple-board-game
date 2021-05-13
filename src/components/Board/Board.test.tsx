import Board from './Board';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


test("board renders correctly with 9 squares", () => {
    render(<Board />);

    expect(screen.getByTestId("board")).toBeInTheDocument();
    expect(screen.getAllByTestId("square").length).toBe(9);
})