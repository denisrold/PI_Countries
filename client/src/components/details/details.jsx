import { useParams } from "react-router-dom";
import {useState, useEffect} from"react";

import axios from"axios"
const Details = () => {
const {id} = useParams();

const [countryDetails, setCountryDetails] = useState([]);

useEffect( ()=>{
    axios.get(`http://localhost:3001/countries/${id}`)
    .then((res)=>{setCountryDetails(res.data)})          
},[id])
   return(
        <div>
            <h1>Estos son los details</h1>
            <h2>{countryDetails?.name}</h2>   
            <p>ISO 3166 ALPHA-3: <b>{countryDetails?.id}</b></p>
            <img src={countryDetails?.flags} alt="Flag"/> 
            <p>Capital: {countryDetails?.capital}</p> 
            <p>Region: {countryDetails?.region}</p>
            <p>Subregion: {countryDetails?.subregion}</p>
            <p>Population: {countryDetails?.population}  /  Area: {countryDetails?.area} kms.</p>
            <p>Population: {countryDetails?.population}</p>
            <br/>
            <hr/>
           
            {
            countryDetails.Activities&&countryDetails.Activities.map((a)=>{
                return (
                    <li key={a.id}>
                 
                        <br/>
                        <p >Activity: {a.name}</p>
                        <p>Season: {a.season}</p>
                        <p>Difficulty level: {a.difficulty} </p>
                        <p>Duration: {a.duration} Hs.</p>
                        <hr/>
                
                    </li>
                    )})
                   
            }
                  
        </div>
        )
}

export default Details;