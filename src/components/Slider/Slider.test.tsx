import Slider from './Slider';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


test("slider renders correctly and provide correct `sliderValue` on change", () => {
    render(
        <Slider 
            duration={1000}
            onChangeSliderValue={(sliderValue: number) => {
                expect(screen.getByTestId("indicator").style.marginLeft).toBe(sliderValue);
            }}
        />
    );

    expect(screen.getByTestId("slider")).toBeInTheDocument();
    expect(screen.getByTestId("indicator").style.animationDuration).toBe("2s");    // animationDuration = (duration / 1000.0 * 2.0 ) + 's';
})