import {Link} from"react-router-dom";
import styles from"./card.module.css"

const Card = (props)=>{
return(
    <div className={styles.card}>
        <Link to={`/details/${props.id}`}>
        <h1>{props.name}</h1>
        <img src={props.flags} alt="Flag"/>
        </Link>
        <h3>Region: {props.subregion}</h3>
    </div>
);
};

export default Card;