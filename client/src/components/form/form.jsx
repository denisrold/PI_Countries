import axios from "axios";
import { useState } from "react";
import { useDispatch} from"react-redux";
import { getAllActivity } from "../redux/actions";
import validate from "./Validations";


const Form = () => {
    const dispatch = useDispatch();
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
        country:[],
    })
   
    const handleChange=(event)=>{
        if(event.target.name === "country"){
            let property = event.target.name;
            let value = event.target.value.split(",");
            value = value.map(country => country);
            setActivity({...Activity,
                [property]: value})
            setErrors(validate({...Activity,[property]: value},errors));
            }
        else {
            let property = event.target.name;
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
               
                alert(`The activity: ${Activity.name} has been created`);
                
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
        <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" value={Activity.name} onChange={handleChange}></input>
                    <span>{errors.name}</span>
                </div>
                <div>
                    <label htmlFor="duration">Duration: </label>
                    <input type="text" name="duration" value={Activity.duration} onChange={handleChange}></input> 
                    <span>{errors.duration}</span>
                </div>
                <div>
                    <label htmlFor="country">Country: </label>
                    <input type="text" name="country" value={Activity.country} onChange={handleChange}></input><span>{errors.country}</span>
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
              <span>{errors.difficulty}</span>
            </div>
            {/* SEASON SELECT */}
            <div>
              <label htmlFor="season"> Season:</label>
              <select value={Activity.season} onChange={handleChange} name="season">
                <option value="" disabled >Select</option>
                <option value={"Summer"} >Summer</option>
                <option value={"Spring"}>Spring</option>
                <option value={"Fall"}>Fall</option>
                <option value={"Winter"}>Winter</option>
              </select>
              <span>{errors.season}</span>
              </div>
                <button type="submit" disabled={errors.name||errors.difficulty||errors.duration||errors.country||errors.season}>Add activity</button>
        </form>
    )
}

export default Form;

//-  Posibilidad de seleccionar/agregar varios países en simultáneo.