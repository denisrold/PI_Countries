import {Link} from"react-router-dom";
import styles from"./card.module.css"

const Card = (props)=>{
return(
    <div className={styles.card}>
        <h1>{props.name}</h1>
        <img src={props.flags} alt="Flag"/>
        <h3>Region: {props.subregion}</h3>
        <Link to={`/details/${props.id}`}>
        <p>Info</p>
        </Link>
    </div>
);
};

export default Card;