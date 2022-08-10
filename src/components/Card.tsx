import { info } from '../App';
import './Card.css';

function Card(props: info) {

    console.log(props);
    
    const { task, completed } = props;
    



return (
    <div className="Card">
        <h3>{task}</h3>
        <p>{completed}</p>
    </div>
)






}

export default Card;