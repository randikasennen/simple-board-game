import './Square.scss';
import player from '../../icons/player.png';
import { usePlayerPosition } from '../../redux/hooks/gamePlay';

interface Props {
    index: number;
}

/*
 * Implementation of Square inside Game Board as a component.
 */
export default function Square(props: Props) {
    const { index } = props;

    const playerPosition = usePlayerPosition();   // To show the player inside square.

    return (
        <div className="square" data-testid="square">
            {index === playerPosition && <img src={player} className="player" alt="player" />}
        </div>
    )
}