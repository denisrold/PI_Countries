import {Link} from"react-router-dom";
import styles from"./card.module.css"
import infoIcon from"../utils/img/infologog2.png"

const Card = (props)=>{

    return(
    <div className={styles.card}>
        <h1>{props.name}</h1>
        <img src={props.flags} alt="Flag"/><br/>
        <h3>Region: {props.region}</h3>
        <br/>
        <Link to={`/details/${props.id}`}>
        <img src={infoIcon} alt="imagen" className={styles.infoIcon}/>
        </Link>
    </div>
);
};

export default Card;