import { useState, useEffect } from 'react';

import './style.css';
import Board from '../../components/Board';
import Slider from '../../components/Slider';
import { usePosition } from '../../contexts/PositionContext';

export default function Game() {
  const [ playerPosition, setPlayerPosition ] = usePosition();
  const [ sliderValue, setSliderValue ] = useState(0);
  const [ round, setRound ] = useState(0);
  const [ currentRoundMarks, setCurrentRoundMarks ] = useState(0);
  const [ totalMarks, setTotalMarks ] = useState(0);
  const [ lastRoundMarks, setLastRoundMarks ] = useState(null);
  
  const duration = 2000;
  const tolerance = 10;

  useEffect(() => {
    if(!playerPosition) {
        setTotalMarks(currentMarks => currentMarks + currentRoundMarks);
        setRound(round => round + 1);
        setCurrentRoundMarks(0);
    }
  }, [playerPosition]);

  const handleOnClickGo = () => {
    if(sliderValue >= (50 - tolerance) && sliderValue <= (50 + tolerance)) {
        evaluate();
        setPlayerPosition(playerPosition => (playerPosition + 1) % 9);
    }
  }

  const evaluate = () => {
      const accuracyFactor = Math.abs(50 - sliderValue) + 1;
      const accuracy = tolerance / accuracyFactor;
      const marks = Math.round(accuracy / tolerance * 100 / 10);
      setCurrentRoundMarks(currentMarks => currentMarks + marks);
  }

  return (
    <div>
      <Board />
      <button onClick={handleOnClickGo}>GO!</button>
      <Slider duration={duration} onChangeSliderValue={(sliderValue) => setSliderValue(sliderValue)}/>
      <h3>{currentRoundMarks}</h3>
    </div>
  );
}