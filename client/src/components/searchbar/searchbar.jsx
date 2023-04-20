import { useState } from "react";
import { useDispatch } from "react-redux";
import {getCountryByName} from"../redux/actions"

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
        <input type="text" placeholder=" Search by name" name="search" onChange={handlerOnChange}/>
        <button type="submit" onClick={handlerSearch}>Search </button>
    </div>
)
}

export default SearchBar;