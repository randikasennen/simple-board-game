import StatisticsCard from './StatisticsCard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


test("statistics card renders correctly", () => {
    render(<StatisticsCard name="Sample Statistic" value={10} color="rgb(204, 204, 204)" />);

    expect(screen.getByTestId("statistics-card")).toBeInTheDocument();
    expect(screen.getByTestId("name").innerHTML).toBe("Sample Statistic");
    expect(screen.getByTestId("name").style.color).toBe("rgb(204, 204, 204)");
    expect(parseInt(screen.getByTestId("value").innerHTML)).toBe(10);
})