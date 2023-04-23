import { useState } from "react";
import { useDispatch } from "react-redux";
import {getCountryByName} from"../redux/actions"
import style from"./searchbar.module.css"

const SearchBar = (props)=>{
    const dispatch = useDispatch();

    const [name, setName] = useState("");

    const handlerOnChange = (e)=>{
        setName(e.target.value);
    }

     const handlerSearch = (e)=>{
        e.preventDefault();
        props.setSearchValue(name);
        props.setOrders("");
        dispatch(getCountryByName(name));
     }
return(
    <div>
        <label htmlFor="search"></label>
        <input className={style.input} type="text" placeholder=" Search by name..." name="search" onChange={handlerOnChange} autoComplete="off"/>
        <button type="submit" onClick={handlerSearch}>Search </button>
    </div>
)
}

export default SearchBar;