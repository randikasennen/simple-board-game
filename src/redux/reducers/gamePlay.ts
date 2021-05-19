import { GamePlayActionType } from '../actions/gamePlayActions';

interface ClickGoAction {
    type: GamePlayActionType,
    payload: number
}

const NUMBER_OF_SQUARES_IN_BOARD = 9;
const ACCURACY_TOLERANCE = 5;   // Tolerance allowed from the middle point for an accepted hit.

const initialState = {
    playerPosition: 0,
    round: 1,
    totalMarks: 0,
    currentRoundMarks: 0,
    highestRoundMarks: 0,
    lastRoundMarks: 0,
    highestSingleHit: 0,
    lastSingleHit: 0,
    hittingAccuracyStatus: { status: 'Hit!', color: '#ccc' }
}

export default function gamePlay(state = initialState, action: ClickGoAction) {
    switch (action.type) {
        case GamePlayActionType.HANDLE_ON_CLICK_GO: {
            const sliderValue = action.payload;
            const difference = Math.abs(50 - sliderValue);

            if(difference <= ACCURACY_TOLERANCE) {
                const marks = evaluateMarks(difference);
                state = updateStateOnSuccessfulHit(marks, state);
            }

            state.hittingAccuracyStatus = getHittingAccuracyStatus(difference);

            return state;
        }
        default: {
            return state;
        }
    }
}


/**
 * Function to evaluate marks.
 */
const evaluateMarks = (difference: number) => {
    const accuracyFactor = difference + 1;
    const accuracy = ACCURACY_TOLERANCE / accuracyFactor;
    const marks = Math.round(accuracy / ACCURACY_TOLERANCE * 100 / 10);
    
    return marks;
}


/**
 * Function to update values of state on a successful hit.
 */
const updateStateOnSuccessfulHit = (marks: number, state: typeof initialState): typeof initialState => {
    state.currentRoundMarks += marks;
    state.lastSingleHit = marks;
    state.playerPosition = (state.playerPosition + 1) % NUMBER_OF_SQUARES_IN_BOARD;

    if(marks > state.highestSingleHit) {
        state.highestSingleHit = marks;
    }

    /**
     * After current round is complete.
     */
    if(state.playerPosition === 0) {
        if(state.currentRoundMarks > state.highestRoundMarks) {
            state.highestRoundMarks = state.currentRoundMarks;
        }

        state.totalMarks += state.currentRoundMarks;
        state.lastRoundMarks = state.currentRoundMarks;
        state.currentRoundMarks = 0;
        state.round++;
    }

    return state;
}


/**
 * Function to return accuracy status according to the difference.
 */
const getHittingAccuracyStatus = (difference: number): typeof initialState.hittingAccuracyStatus => {
    switch(difference) {
        case 0        : return ({ status: 'Perfect!', color: '#009900' });
        case 1: case 2: return ({ status: 'Too Close!', color: '#0080ff' });
        case 3: case 4: return ({ status: 'Not Bad!', color: '#9933ff' });
        case 5        : return ({ status: 'Better on Next Time!', color: '#ff9900' });
        default       : return ({ status: 'Try Again!', color: '#ff3300' });
    }
}