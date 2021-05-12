import Board from './Board';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


test("board renders correctly with 9 squares", () => {
    const { getByTestId } = render(<Board />);
    const board = getByTestId("board");
    const squares = board.getElementsByClassName("square");

    expect(board).toBeInTheDocument();
    expect(squares.length).toBe(9);
})