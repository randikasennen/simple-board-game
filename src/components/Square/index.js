import './style.css';
import player from '../../icons/player.png';
import { usePosition } from '../../contexts/PositionContext';

export default function(props) {
    const { index } = props;

    const [ playerPosition ] = usePosition();

    return (
        <div className="square">
            {index == playerPosition && <img src={player} className="player" />}
        </div>
    )
}