import { useState, useEffect } from 'react';

import './style.css';
import Board from '../../components/Board';
import Slider from '../../components/Slider';
import { usePosition } from '../../contexts/PositionContext';

export default function Game() {
  const [ playerPosition, setPlayerPosition ] = usePosition();
  const [ sliderValue, setSliderValue ] = useState(0);

  const duration = 3;

  useEffect(() => {
    const interval = setInterval(() => setSliderValue(sliderValue => (sliderValue + 1) % 101), duration);
  }, [])

  return (
    <div>
      <Board />
      <button onClick={() => setPlayerPosition((playerPosition + 1) % 9)}>GO!</button>
      <Slider sliderValue={sliderValue} duration={duration}/>
    </div>
  );
}