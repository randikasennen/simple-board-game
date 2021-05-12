import './style.css';
import Square from '../Square/Square';

/*
 * Implementation of Game Board as a component.
 * Index <- For configuring the player movements.
 */
export default function Board() {
  return (
    <div className="board">
      <div className="row">
        <Square index={0} />
        <Square index={1} />
        <Square index={2} />
      </div>
      <div className="row">
        <Square index={5} />
        <Square index={4} />
        <Square index={3} />
      </div>
      <div className="row">
        <Square index={6} />
        <Square index={7} />
        <Square index={8} />
      </div>
    </div>
  );
}