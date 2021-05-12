import './style.css';

export default function StatisticsCard(props) {
    const { name, value, color } = props;

    return (
        <div className="statistics-card" style={{ borderColor: color }}>
            <div className="name" style={{ color: color }}>{name}</div>
            <div className="value">{value}</div>
        </div>
    )
}