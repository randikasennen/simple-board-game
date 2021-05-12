import './StatisticsCard.scss';

interface Props {
    name: string;
    value: number | string;
    color: string;
}

/*
 * Implementation of Statistics Card to deisplay scores.
 */
export default function StatisticsCard(props: Props) {
    const { name, value, color } = props;

    return (
        <div className="statistics-card" style={{ borderColor: color }} data-testid="statistics-card" >
            <div className="name" style={{ color: color }} data-testid="name">{name}</div>
            <div className="value" data-testid="value">{value}</div>
        </div>
    )
}