import { useState } from "react";
import { useDispatch} from "react-redux";
import {getCountryByName} from"../redux/actions"
import style from"./searchbar.module.css"
import convertUppercase from"../utils/convertUppercase";
import { useSelector} from "react-redux";

const SearchBar = (props)=>{
    const dispatch = useDispatch();
    const allCountriesAux = useSelector(state=>state.allCountriesAux)
    const [name, setName] = useState("");

    const handlerOnChange = (e)=>{
        setName(e.target.value);
    }

     const handlerSearch = (e)=>{
        e.preventDefault();
        const upperName = convertUppercase(name)
        const findCountry = allCountriesAux.filter(c=>{
           return c.name===upperName;
        })

        if(!findCountry.length){return window.alert("Make sure that the name is correct.")}
        else {
        props.setSearchValue(name);
        props.setOrders("");
        dispatch(getCountryByName(name));
        props.setCurrentPage(1);

        }}
return(
    <div>
        <label htmlFor="search"></label>
        <input className={style.input} type="text" placeholder=" Search by name..." name="search" onChange={handlerOnChange} autoComplete="off"/>
        <button type="submit" onClick={handlerSearch}>Search </button>
    </div>
)
}

export default SearchBar;