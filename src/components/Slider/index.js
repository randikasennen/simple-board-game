import { useEffect } from 'react';

import './style.css';

export default function Slider(props) {
    const { duration, onChangeSliderValue } = props;
    const animationDuration = (duration / 1000.0 * 2.0 ) + 's';

    useEffect(() => {
        const indicator = getComputedStyle(document.getElementById("indicator"));
        
        const slide = setInterval(() => {
            const sliderValue = parseInt(indicator.getPropertyValue('margin-left'));
            onChangeSliderValue(sliderValue);
        }, 1);

        return () => clearInterval(slide);
    }, [])

    return (
        <div className="slider-container">
            <div className="slider left"></div>
            <div className="slider right"></div>
            <div className="indicator" id="indicator" style={{ animationDuration }}></div>
        </div>
    )
}