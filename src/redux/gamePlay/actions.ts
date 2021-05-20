export enum GamePlayActionType {
    HANDLE_ON_CLICK_GO = "HANDLE_ON_CLICK_GO"
}

export const handleOnClickGo = (sliderValue: number) => ({
    type: GamePlayActionType.HANDLE_ON_CLICK_GO,
    payload: sliderValue
})