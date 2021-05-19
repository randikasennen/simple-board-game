import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleOnClickGo } from '../../redux/actions/gamePlayActions';
import { useGamePlayState } from '../../redux/hooks/gamePlay';

import './GamePlayPage.scss';
import { Board, Slider, StatisticsCard} from '../../components';

const SLIDER_ANIMATION_DURATION = 1000;   // Slider animation duration in 'ms' to go from one end to the other end.

export default function GamePlayPage() {
  const dispatch = useDispatch();
  const [ sliderValue, setSliderValue ] = useState(0);
  const {
    round,
    totalMarks,
    currentRoundMarks,
    highestRoundMarks,
    lastRoundMarks,
    highestSingleHit,
    lastSingleHit,
    hittingAccuracyStatus
  } = useGamePlayState();
  
  
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
                <Slider duration={SLIDER_ANIMATION_DURATION} onChangeSliderValue={(sliderValue: number) => setSliderValue(sliderValue)}/>
                <button className="go" onClick={() => dispatch(handleOnClickGo(sliderValue))} data-testid="go-button">GO!</button>
                <h3 className="accuracy-status" style={{ color: hittingAccuracyStatus.color }}>{hittingAccuracyStatus.status}</h3>
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
                    <StatisticsCard name="Highest Single Hit" value={highestSingleHit ? highestSingleHit + ' Marks' : 'N/A'} color="#ff3300" />
                    <StatisticsCard name="Last Single Hit" value={lastSingleHit ? lastSingleHit + ' Marks' : 'N/A'} color="#0080ff" />
                </div>
            </div>

            <p className="instructions">Hit on the "GO" button to move the player when the slider is at its middle position.</p>
            <p className="instructions">Be more accurate to score more!</p>
        </div>
      </div>
    </div>
  );
}