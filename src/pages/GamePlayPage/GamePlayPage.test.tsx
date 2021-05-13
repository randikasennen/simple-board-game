import GamePlayPage from './GamePlayPage';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


test("game play page renders correctly", () => {
    render(<GamePlayPage />);

    expect(screen.getByTestId("board")).toBeInTheDocument();
    expect(screen.getByTestId("slider")).toBeInTheDocument();
    expect(screen.getByTestId("go-button")).toBeInTheDocument();

    expect(screen.getAllByTestId("square").length).toBe(9);
    expect(screen.getAllByTestId("statistics-card").length).toBe(6);
})