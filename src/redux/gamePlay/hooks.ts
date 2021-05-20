import { useSelector } from 'react-redux';

export const useGamePlayState = () => useSelector((state: any) => state.gamePlay);
export const usePlayerPosition = () => useSelector((state: any) => state.gamePlay.playerPosition);