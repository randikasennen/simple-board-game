export enum PlayerActionType {
    MOVE_TO_NEXT_POSITION = "MOVE_TO_NEXT_POSITION"
}

export const movePlayerToNextPosition = () => ({
    type: PlayerActionType.MOVE_TO_NEXT_POSITION
})