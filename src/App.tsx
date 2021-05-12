import { useState } from 'react';

import { GamePlayPage } from './pages';
import PositionContextProvider from './contexts/PositionContext';

export default function App() {
  const [ playerPosition, setPlayerPosition ] = useState(0);

  return (
    <PositionContextProvider value={[ playerPosition, setPlayerPosition ]}>
      <GamePlayPage />
    </PositionContextProvider>
  );
}