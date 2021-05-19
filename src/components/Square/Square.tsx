import './Square.scss';
import player from '../../icons/player.png';
import { useSelector } from 'react-redux';

interface Props {
    index: number;
}

/*
 * Implementation of Square inside Game Board as a component.
 */
export default function Square(props: Props) {
    const { index } = props;

    const playerPosition = useSelector((state: any) => state.playerPosition);   // To show the player inside square.

    return (
        <div className="square" data-testid="square">
            {index === playerPosition && <img src={player} className="player" alt="player" />}
        </div>
    )
}