import Board from './Board';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


test("board renders correctly with 9 squares", () => {
    const { getByTestId, getAllByTestId } = render(<Board />);

    expect(getByTestId("board")).toBeInTheDocument();
    expect(getAllByTestId("square").length).toBe(9);
})