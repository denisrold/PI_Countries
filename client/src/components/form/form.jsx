import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch} from"react-redux";
import { getAllActivity } from "../redux/actions";
import { useSelector } from "react-redux";
import  {getAllCountries} from"../redux/actions";
import validate from "./Validations";
import style from"./form.module.css"

const Form = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.allCountriesAux)
    
    useEffect(()=>{
        dispatch(getAllCountries());
    },[dispatch])

    const [Activity, setActivity] = useState({
        name:"",
        difficulty:0, 
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
                alert(`-Ensure that the values in the inputs are correct.
-The name of the activity cannot be repeated.`)
            }
        }

    return(
        <form onSubmit={submitHandler} className={style.form}>
                <h2 style={{marginTop:`40px`}}>Create New Activity</h2>
                <div className={style.items}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" value={Activity.name} onChange={handleChange} placeholder="Activity name..."></input>
                    <span className={style.errors}>{errors.name}</span>
                </div>

                <div style={{marginBottom:`15px`,marginTop:`15px`}}>
                    <label htmlFor="duration">Duration: </label>
                    <input type="text" name="duration" value={Activity.duration} onChange={handleChange} placeholder='"X" hours...'></input> 
                    <span className={style.errors}>{errors.duration}</span>
                </div>
                
                <div>

            {/*DIFFICULTY LEVEL SELECT*/}
              <label htmlFor='difficulty'>Difficulty level: </label>

              <input type="radio" id='1' name='difficulty' value='1' onChange={handleChange} />
              <label htmlFor='1'>1</label>

              <input type="radio" id='2' name='difficulty' value='2' onChange={handleChange}/>
              <label htmlFor='2'>2</label>

              <input type="radio" id='3' name='difficulty' value='3' onChange={handleChange}/>
              <label htmlFor='3'>3</label>

              <input type="radio" id='4' name='difficulty' value='4' onChange={handleChange}/>
              <label htmlFor='4'>4</label>

              <input type="radio" id='5' name='difficulty' value='5' onChange={handleChange}/>
              <label htmlFor='5'>5</label>
              <span className={style.errors}>{errors.difficulty}</span>
            </div>

            {/* SEASON SELECT */}
            <div>
              <label htmlFor="season"> Season:</label>
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
                    {countries.map(c => {
                    return(
                    <div key={c.id}>
                    <input type="checkbox" id={c.id} name="country" value={c.name} onChange={handleChange}/>
                    <label htmlFor={c.id}>{c.name}</label>
                    </div>
                    )})}
            </div>
            <div className={style.button}>
                <button type="submit" disabled={errors.name||errors.difficulty||errors.duration||errors.season||errors.country}>Add activity</button>
            </div>
        </form>
    )
}

export default Form;