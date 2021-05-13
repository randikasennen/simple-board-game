import GamePlayPage from './GamePlayPage';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


test("game play page renders correctly", () => {
    const { getByTestId, getAllByTestId } = render(<GamePlayPage />);

    expect(getByTestId("board")).toBeInTheDocument();
    expect(getByTestId("slider")).toBeInTheDocument();
    expect(getByTestId("go-button")).toBeInTheDocument();

    expect(getAllByTestId("square").length).toBe(9);
    expect(getAllByTestId("statistics-card").length).toBe(6);
})