import StatisticsCard from './StatisticsCard';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


test("statistics card renders correctly", () => {
    const { getByTestId } = render(<StatisticsCard name="Sample Statistic" value={10} color="rgb(204, 204, 204)" />);

    expect(getByTestId("statistics-card")).toBeInTheDocument();
    expect(getByTestId("name").innerHTML).toBe("Sample Statistic");
    expect(getByTestId("name").style.color).toBe("rgb(204, 204, 204)");
    expect(parseInt(getByTestId("value").innerHTML)).toBe(10);
})