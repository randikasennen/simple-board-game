import { useEffect } from 'react';
import Square from './Square';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { usePosition } from '../../contexts/PositionContext';


function TestSquareRenderBehaviour(props: { index: number; position: number;  }) {
    const { index, position } = props;
    const [ playerPosition, setPlayerPosition ] = usePosition();

    useEffect(() => { setPlayerPosition(position) }, []);

    return <Square index={index} />
}


test("square renders with player when `index` equals to `playerPosition`", () => {
    const { getByTestId } = render(<TestSquareRenderBehaviour index={0} position={0} />);
    const square = getByTestId("square");

    expect(square).toBeInTheDocument();
    expect(square).not.toBeEmptyDOMElement();
})


test("square renders without player when `index` not equals to `playerPosition`", () => {
    const { getByTestId } = render(<TestSquareRenderBehaviour index={1} position={0} />);
    const square = getByTestId("square");
    
    expect(square).toBeInTheDocument();
    expect(getByTestId("square")).toBeEmptyDOMElement();
})