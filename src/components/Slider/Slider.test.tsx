import Slider from './Slider';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


test("slider renders correctly and provide correct `sliderValue` on change", () => {
    const { getByTestId } = render(<Slider duration={1000} onChangeSliderValue={(sliderValue: number) => {
        expect(getByTestId("indicator").style.marginLeft).toBe(sliderValue);
    }} />);

    expect(getByTestId("slider")).toBeInTheDocument();
    expect(getByTestId("indicator").style.animationDuration).toBe("2s");    // animationDuration = (duration / 1000.0 * 2.0 ) + 's';
})