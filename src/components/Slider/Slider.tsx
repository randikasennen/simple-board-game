import { useEffect } from 'react';

import './Slider.scss';

interface Props {
    duration: any;
    onChangeSliderValue: any;
}

export default function Slider(props: Props) {
    /*
     * duration <- in 'ms'.
     * onChangeSliderValue <- Callback function to get the value of slider.
     */
    const { duration, onChangeSliderValue } = props;

    /*
     * Setting the animation duration of keyframes.
     * Devide by 1000.0 for convert 'ms' to 's'.
     * Multiply by 2 since one keyframe loop is 2 cycles.
     */
    const animationDuration = (duration / 1000.0 * 2.0 ) + 's';

    /*
     * Setting up the Slider.
     */
    useEffect(() => {
        const indicator = getComputedStyle(document.getElementById("indicator")!);
        
        /*
         * Get Slider value.
         * Margin left is changed using keyframes.
         * Margin left is considered as the slider value.
         */
        const slide = setInterval(() => {
            const sliderValue = parseInt(indicator.getPropertyValue('margin-left'));
            onChangeSliderValue(sliderValue);
        }, 1);

        return () => clearInterval(slide);
    }, [onChangeSliderValue])

    return (
        <div className="slider-container" data-testid="slider">
            <div className="slider left"></div>
            <div className="slider right"></div>
            <div className="indicator" id="indicator" data-testid="indicator" style={{ animationDuration }}></div>
        </div>
    )
}