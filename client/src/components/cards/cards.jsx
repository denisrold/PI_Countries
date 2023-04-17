import Card from "../card/card";
import styles from"./cards.module.css"
const Cards = (props)=>{
return(
    <div className={styles.cards}>
        {props.currentCountries.map(country=>{
            return <Card 
            key={country.id} 
            id={country.id}
            name={country.name}
            flags={country.flags}
            region={country.region} 
            capital={country.capital} 
            subregion={country.subregion}
            area={country.area}
            population={country.population}
            />
        })}
       
    </div>
);
};

export default Cards;