import './style.css';

export default function Slider(props) {
    const { sliderValue, duration } = props;
    const animationDuration = (duration / 1000.0 * 2.0 * 100.0 ) + 's';

    return (
        <div className="slider-container">
            <div className="slider left"></div>
            <div className="slider right"></div>
            <div className="indicator" style={{ animationDuration }}></div>
        </div>
    )
}