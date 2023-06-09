import { useParams } from "react-router-dom";
import {useState, useEffect} from"react";
import {Link}  from "react-router-dom";
import style from"./details.module.css"
import convertUppercase from"../utils/convertUppercase";

import axios from"axios"
const Details = () => {
const {id} = useParams();
const [countryDetails, setCountryDetails] = useState([]);

useEffect( ()=>{
    axios.get(`http://localhost:3001/countries/${id}`)
    .then( (res)=>{ setCountryDetails(res.data)})
},[id])

const notsubRegion = (subRegion)=>{
    if(subRegion === null ) return "not defined" 
    else return subRegion;
}

   return(
        <div className={style.details}>
            <div className={style.information}>
                <h2>Details of {countryDetails?.name}</h2>
                <h5> international alpha-3 code: <b>{countryDetails?.id}</b></h5>
                <img src={countryDetails?.flags} alt="Flag"/> 
                <p>{countryDetails?.name} is located in the {countryDetails?.region} region, specifically in the {notsubRegion(countryDetails?.subregion)} subregion.</p>
                <p>Its capital city is {countryDetails?.capital} and it has a population of approximately {countryDetails?.population} inhabitants.</p>
                <p>The country's total area is {countryDetails?.area} square kilometers.</p>
            </div>
             <p  className={style.presentationAct}><b>{countryDetails?.name} is a popular destination for tourists from around the world for the following activities:</b></p>
            <div className={style.activityList}>
                <ul>{
                countryDetails.Activities&&countryDetails.Activities.map((a)=>{
                    return (
                        <li key={a.id} id={a.id}>
                        <br/>
                        <Link to="/activities"><h3>{convertUppercase(a.name)} - <span className={style.id}>ID: {a.id}</span></h3></Link>
                        <p style={{fontSize:'19px'}}>Season: {a.season}</p>
                    </li>
                    )})}
                </ul>       
            </div>
        </div>
        )
}

export default Details;