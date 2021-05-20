import { GamePlayActionType } from './actions';
import gamePlay, { GamePlayState, evaluateMarks } from './reducers';
import { NUMBER_OF_SQUARES_IN_BOARD, SLIDER_LENGTH, ACCURACY_TOLERANCE } from './constants';
import '@testing-library/jest-dom/extend-expect';


const sliderMidPoint = SLIDER_LENGTH / 2;

const action = {
    type: GamePlayActionType.HANDLE_ON_CLICK_GO,
    payload: sliderMidPoint
}

var state: GamePlayState;

/**
 * Reset state to initialState before each test.
 */
beforeEach(() => {
    state = {
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
})


test("reducer works correctly for " + GamePlayActionType.HANDLE_ON_CLICK_GO + " for unsuccessful hits.", () => {
    const sliderValues = Array.from({ length: SLIDER_LENGTH + 1 }, (x, i) => i)
                              .filter(e => { return e < sliderMidPoint - ACCURACY_TOLERANCE || e > sliderMidPoint + ACCURACY_TOLERANCE });

    const expectedState = {
        ...state,
        hittingAccuracyStatus: { status: 'Try Again!', color: '#ff3300' }
    }

    sliderValues.forEach(sliderValue => {
        expect(gamePlay(state, { ...action, payload: sliderValue })).toEqual(expectedState);
    })
})


test("marks are evaluated correctly", () => {
    expect(evaluateMarks(0)).toEqual(10);
    expect(evaluateMarks(1)).toEqual(5);
    expect(evaluateMarks(2)).toEqual(3);
    expect(evaluateMarks(3)).toEqual(3);
    expect(evaluateMarks(4)).toEqual(2);
    expect(evaluateMarks(5)).toEqual(2);
})


test("reducer works correctly for " + GamePlayActionType.HANDLE_ON_CLICK_GO + " for successful hits.", () => {
    const testCases = [
        {
            action: { ...action, payload: 45 },
            expectedState: {
                ...state,
                playerPosition: 1,
                currentRoundMarks: 2,
                highestSingleHit: 2,
                lastSingleHit: 2,
                hittingAccuracyStatus: { status: 'Better on Next Time!', color: '#ff9900' }
            }
        },
        {
            action: { ...action, payload: 47 },
            expectedState: {
                ...state,
                playerPosition: 2,
                currentRoundMarks: 2 + 3,
                highestSingleHit: 3,
                lastSingleHit: 3,
                hittingAccuracyStatus: { status: 'Not Bad!', color: '#9933ff' }
            }
        },
        {
            action: { ...action, payload: 49 },
            expectedState: {
                ...state,
                playerPosition: 3,
                currentRoundMarks: 2 + 3 + 5,
                highestSingleHit: 5,
                lastSingleHit: 5,
                hittingAccuracyStatus: { status: 'Too Close!', color: '#0080ff' }
            }
        },
        {
            action: { ...action, payload: 50 },
            expectedState: {
                ...state,
                playerPosition: 4,
                currentRoundMarks: 2 + 3 + 5 + 10,
                highestSingleHit: 10,
                lastSingleHit: 10,
                hittingAccuracyStatus: { status: 'Perfect!', color: '#009900' }
            }
        }
    ]

    testCases.forEach(testCase => {
        const { action, expectedState } = testCase;
        expect(gamePlay(state, action)).toEqual(expectedState);
    })
})


test("reducer works correctly when completing a round", () => {
    var maxTotalMarksPerRound = 0;
    
    for(let numberOfSuccessfulClicks = 0; numberOfSuccessfulClicks < NUMBER_OF_SQUARES_IN_BOARD; numberOfSuccessfulClicks++) {
        gamePlay(state, action);
        maxTotalMarksPerRound += evaluateMarks(0);
    }

    const expectedState = {
        ...state,
        playerPosition: 0,
        round: 2,
        totalMarks: maxTotalMarksPerRound,
        currentRoundMarks: 0,
        highestRoundMarks: maxTotalMarksPerRound,
        lastRoundMarks: maxTotalMarksPerRound,
    }

    expect(state).toEqual(expectedState);
})