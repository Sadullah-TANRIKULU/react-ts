import { info } from '../App';
import './Card.css';

function Card(props: info) {

    const { activity, type, participants, price, accessibility } = props;
    



return (
    <div className="Card">
        <h3>{activity}</h3>
        <p>{type}</p>
        <p>{participants}</p>
    </div>
)






}

export default Card;