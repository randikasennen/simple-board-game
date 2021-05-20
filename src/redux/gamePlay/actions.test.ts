import { handleOnClickGo, GamePlayActionType } from './actions';
import '@testing-library/jest-dom/extend-expect';

test("creates an action to handle on click 'GO' button", () => {
    const sliderValue = 50;
    const expectedAction = {
        type: GamePlayActionType.HANDLE_ON_CLICK_GO,
        payload: sliderValue
    }
    expect(handleOnClickGo(sliderValue)).toEqual(expectedAction);
})