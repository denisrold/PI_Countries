import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch} from"react-redux";
import { getAllActivity, getAllCountries } from "../redux/actions";
import { useSelector } from "react-redux";
import validate from "./Validations";
import style from"./form.module.css"

const Form = () => {
    //getallCountries
    const dispatch = useDispatch();
    const countries = useSelector(state => state.allCountriesAux)
    const orderCountries = countries.sort((a, b) => a.name.localeCompare(b.name));
    
    useEffect(()=>{
        dispatch(getAllCountries());
    },[dispatch])
    
    //Local state
    const [Activity, setActivity] = useState({
        name:"",
        difficulty:"", 
        duration:"", 
        season:"", 
        country:[],
    })

    const [errors, setErrors] = useState({
        name:"",
        difficulty:"", 
        duration:"", 
        season:"", 
        country:"",
    })

    
    const handleChange=(event)=>{
        let property = event.target.name
        
        if(property === "country"){
            const isChecked = event.target.checked;
            let country = event.target.value;
            if(isChecked){
                setActivity({...Activity,
                    country:[...Activity.country, country] })
                    
                    setErrors(validate({...Activity,[property]: country},errors));
                }
                else{
                    const countryRemove = country;
                    const removeCountryArray = Activity.country.filter(c=>c !== countryRemove);
                    setActivity({
                        ...Activity,
                        country:removeCountryArray,
                    })
                    setErrors(validate({...Activity,[property]: country},errors));
                }}

        else {
            let value = event.target.value;
            setActivity({...Activity,
            [property]: value})
            setErrors(validate({...Activity,[property]: value},errors));
            }
            
        }

        const submitHandler = async(event) => {
            event.preventDefault();
            try {
                await axios.post(`http://localhost:3001/activities`, Activity)
               
                alert(`The new activity: ${Activity.name} has been created`);
                
                setActivity({
                    name:"",
                    difficulty:0, 
                    duration:0, 
                    season:"", 
                    country:[],
                    });
               
                dispatch(getAllActivity());
            } catch (error) {
                console.log(error);
                alert(`-Ensure that the values in the inputs are correct.`)
            }
        }

    return(
        <form onSubmit={submitHandler} className={style.form}>
            <h2 >Create activity</h2>
            <div className={style.items}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" value={Activity.name} onChange={handleChange} placeholder="Activity name..."></input>
                    <span className={style.errors}>{errors.name}</span>
                </div>

                <div style={{marginBottom:`15px`,marginTop:`15px`}}>
                    <label htmlFor="duration">Duration: </label>
                    <input type="text" name="duration" value={Activity.duration} onChange={handleChange} placeholder='"X" hours...'></input> 
                    <span className={style.errors}>{errors.duration}</span>
                </div>
                
            {/*DIFFICULTY LEVEL SELECT*/}
                <div>
                    <label htmlFor="difficulty">Level of challenge: </label>
                    <select value={Activity.difficulty} onChange={handleChange} name="difficulty">
                    <option value="" disabled>Select</option>
                    <option value={"1"}>Beginner</option>
                    <option value={"2"}>Easy</option>
                    <option value={"3"}>Intermediate</option>
                    <option value={"4"}>Hard</option>
                    <option value={"5"}>Expert</option>
                    </select>
                    <span className={style.errors}>{errors.difficulty}</span>
                </div>


            {/* SEASON SELECT */}
                <div>
                    <label htmlFor="season"> Season: </label>
                    <select value={Activity.season} onChange={handleChange} name="season" style={{marginBottom:`15px`,marginTop:`15px`}}>
                    <option value="" disabled >Select</option>
                    <option value={"Summer"} >Summer</option>
                    <option value={"Spring"}>Spring</option>
                    <option value={"Fall"}>Fall</option>
                    <option value={"Winter"}>Winter</option>
                    </select>
                    <span className={style.errors}>{errors.season}</span>
                </div>
            </div>
              
              {/* COUNTRY SELECT */}
                <span className={style.errors}>{errors.country}</span>
                <div className={style.countries}>
                    {orderCountries.map(c => {
                    return(
                    <div key={c.id}>
                        <input checked={Activity.country.includes(c.name)} type="checkbox" id={c.id} name="country" value={c.name} onChange={handleChange}/>
                        <label htmlFor={c.id}>{c.name}</label>
                    </div>
                    )})}
                </div>
                {/* Add button */}
                <div className={!Activity.name||!Activity.difficulty||!Activity.duration||!Activity.season||!Activity.country.length?style.disabled:style.button}>
                    <button type="submit" disabled={!Activity.name||!Activity.difficulty||!Activity.duration||!Activity.season||!Activity.country.length} >Add activity</button>
                </div>
        </form>
    )
}

export default Form;