import { useState, useEffect } from 'react';

import './style.css';
import Board from '../../components/Board';
import Slider from '../../components/Slider';
import StatisticsCard from '../../components/StatisticsCard';
import { usePosition } from '../../contexts/PositionContext';

export default function Game() {
  const [ playerPosition, setPlayerPosition ] = usePosition();
  const [ sliderValue, setSliderValue ] = useState(0);
  const [ round, setRound ] = useState(0);
  const [ currentRoundMarks, setCurrentRoundMarks ] = useState(0);
  const [ totalMarks, setTotalMarks ] = useState(0);
  const [ lastRoundMarks, setLastRoundMarks ] = useState(null);
  const [ highestRoundMarks, setHighestRoundMarks ] = useState(null);
  const [ highestSingleHit, setHighestSingleHit ] = useState(null);
  
  const duration = 1000;
  const tolerance = 10;

  useEffect(() => {
    if(!playerPosition) {
        setTotalMarks(currentMarks => currentMarks + currentRoundMarks);
        setRound(round => round + 1);

        if(!highestRoundMarks || currentRoundMarks > highestRoundMarks) {
            setHighestRoundMarks(currentRoundMarks);
        }

        setLastRoundMarks(currentRoundMarks);
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

      if(!highestSingleHit || marks > highestSingleHit) {
          setHighestSingleHit(marks);
      }
  }

  return (
    <div className="container">
      <div className="title-container">
        <h1 className="title">Shooting Gale</h1>
        <h3 className="sub-title">Shoot on perfect time to score more!</h3>
      </div>

      <div className="sub-container">
        <div className="playing-area">
            <Board />
            <div className="actions">
                <Slider duration={duration} onChangeSliderValue={(sliderValue) => setSliderValue(sliderValue)}/>
                <button className="go" onClick={handleOnClickGo}>GO!</button>
            </div>
        </div>

        <div>
            <h3 className="round">Round: {round}</h3>

            <div className="statistics">
                <div>
                    <StatisticsCard name="Total Marks" value={totalMarks} color="#009900" />
                    <StatisticsCard name="Current Round Marks" value={currentRoundMarks} color="#9933ff" />
                </div>
                <div>
                    <StatisticsCard name="Highest Round Marks" value={highestRoundMarks || 'N/A'} color="#e6005c" />
                    <StatisticsCard name="Last Round Marks" value={lastRoundMarks || 'N/A'} color="#ff9900" />
                </div>
                <div>
                    <StatisticsCard name="Highest Single Hit" value={highestSingleHit || 'N/A'} color="#ff3300" />
                    <StatisticsCard name="Last Single Hit" value={highestSingleHit || 'N/A'} color="#0080ff" />
                </div>
            </div>

            <p className="instructions">Hit on the "GO" button to move the player when the slider is at its middle position.</p>
            <p className="instructions">Be more accurate to score more!</p>
            
        </div>
      </div>
    </div>
  );
}