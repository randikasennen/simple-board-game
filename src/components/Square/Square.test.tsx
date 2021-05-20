import { Provider } from 'react-redux';
import store from '../../redux/store';
import Square from './Square';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


test("square renders with player when `index` equals to `playerPosition`", () => {
    render(<Provider store={store}><Square index={0} /></Provider>);
    const square = screen.getByTestId("square");

    expect(square).toBeInTheDocument();
    expect(square).not.toBeEmptyDOMElement();
})


test("square renders without player when `index` not equals to `playerPosition`", () => {
    render(<Provider store={store}><Square index={1} /></Provider>);
    const square = screen.getByTestId("square");
    
    expect(square).toBeInTheDocument();
    expect(square).toBeEmptyDOMElement();
})