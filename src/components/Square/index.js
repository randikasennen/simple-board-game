import './style.css';
import player from '../../icons/player.png';
import { usePosition } from '../../contexts/PositionContext';

/*
 * Implementation of Square inside Game Board as a component.
 */
export default function Square(props) {
    const { index } = props;

    const [ playerPosition ] = usePosition();   // To show the player inside square.

    return (
        <div className="square">
            {index === playerPosition && <img src={player} className="player" alt="player" />}
        </div>
    )
}