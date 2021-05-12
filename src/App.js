import { useState } from 'react';

import Game from './pages/Game/Game';
import PositionContextProvider from './contexts/PositionContext';

export default function App() {
  const [ playerPosition, setPlayerPosition ] = useState(0);

  return (
    <PositionContextProvider value={[ playerPosition, setPlayerPosition ]}>
      <Game />
    </PositionContextProvider>
  );
}