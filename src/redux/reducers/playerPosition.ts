import { PlayerActionType } from '../actions/playerActions';

interface Action {
    type: PlayerActionType
}

const NUMBER_OF_SQUARES_IN_BOARD = 9

const initialState = 0;

export default function(state = initialState, action: Action) {
    switch (action.type) {
        case PlayerActionType.MOVE_TO_NEXT_POSITION: {
            const newPositionIndex = (state + 1) % NUMBER_OF_SQUARES_IN_BOARD;
            return newPositionIndex;
        }
        default: {
            return state;
        }
    }
}