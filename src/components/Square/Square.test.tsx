import { useEffect } from 'react';
import Square from './Square';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


test("square renders with player when `index` equals to `playerPosition`", () => {
    render(<Square index={0} />);
    const square = screen.getByTestId("square");

    expect(square).toBeInTheDocument();
    expect(square).not.toBeEmptyDOMElement();
})


test("square renders without player when `index` not equals to `playerPosition`", () => {
    render(<Square index={1} />);
    const square = screen.getByTestId("square");
    
    expect(square).toBeInTheDocument();
    expect(square).toBeEmptyDOMElement();
})