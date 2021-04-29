import { useState } from 'react';

import './style.css';
import Board from '../../components/Board';
import { usePosition } from '../../contexts/PositionContext';

export default function() {
  const [ playerPosition, setPlayerPosition ] = usePosition();

  return (
    <div>
      <Board />
      <button onClick={() => setPlayerPosition((playerPosition + 1) % 9)}>GO!</button>
    </div>
  );
}