import { useState } from 'react';

import './style.css';
import Board from '../../components/Board';
import Slider from '../../components/Slider';
import { usePosition } from '../../contexts/PositionContext';

export default function Game() {
  const [ playerPosition, setPlayerPosition ] = usePosition();
  const [ sliderValue, setSliderValue ] = useState(0);

  const duration = 50;

  const handleOnClickGo = () => {
    if(sliderValue >= 45 && sliderValue <= 55) {
        setPlayerPosition(playerPosition => (playerPosition + 1) % 9);
    }
  }


  return (
    <div>
      <Board />
      <button onClick={handleOnClickGo}>GO!</button>
      <Slider duration={duration} onChangeSliderValue={(sliderValue) => setSliderValue(sliderValue)}/>
      <h3>{sliderValue}</h3>
    </div>
  );
}