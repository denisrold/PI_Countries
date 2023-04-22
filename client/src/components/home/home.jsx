import Cards from "../cards/cards";
import { useEffect, useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { getAllCountries,getAllActivity, filterByRegion,filterByActivity, orderAlpha, orderPopulation } from "../redux/actions";
import SearchBar from "../searchbar/searchbar";
import Paginado from"../paginado/paginado";
import paginadoAux from "../paginado/paginadoAux";
import style from"./home.module.css"
import errorOrder from"../utils/errorOrders"


const Home = ()=>{

    const dispatch = useDispatch();
    
    // obtengo  countries de la base de datos.
    useEffect(()=>{
    dispatch(getAllCountries());
    dispatch(getAllActivity())
    
    },[dispatch])
    
    //estado global.
    const allCountries = useSelector(state => state.allCountries);
    const allActivities = useSelector(state => state.allActivities);

    
    //configuracion del paginado
    const [currentPage, setCurrentPage] = useState(1);
    /* eslint-disable-next-line no-unused-vars */
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const currentCountries = paginadoAux(currentPage, countriesPerPage, allCountries);
    
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    //mensajes informativos.
    const [filter, setFilter] = useState("All countries");
    const [orders, setOrders] = useState("");
    const [searchValue, setSearchValue] = useState('');


    //handlers filters   
    const handleFilterByRegion= (event)=>{
        setOrders("")
        let message = event.target.value;
        dispatch(filterByRegion(event.target.value))
        setCurrentPage(1);
        event.target.value = "default"
        setSearchValue("");
        setFilter(message)
    }

    const handleFilterByActivity = (event)=>{
        setOrders("")
        let message = event.target.value;
        dispatch(filterByActivity(event.target.value))
        setCurrentPage(1);
        event.target.value = "default"
        setFilter(message)
        
    }

    //handlers orders
    const handleOrderAlpha=(event)=>{
        let message = event.target.value;
        dispatch(orderAlpha(event.target.value))
         event.target.value = "default"
        setCurrentPage(1);
        setOrders(message)
        errorOrder(currentCountries,setOrders);
    }

    const handleOrderPopulation=(event)=>{
        let message = event.target.value;
        dispatch(orderPopulation(event.target.value))
        event.target.value ="default"
        setCurrentPage(1);
        setOrders(message)
        errorOrder(currentCountries,setOrders);
    }


    
    return(
        <div className={style.home}>
            <div>
                <span style={{fontWeight:`bold`}}>Filter by: </span>
                <select onChange={handleFilterByRegion}>
                    <option value="default">Region</option>
                    <option value="All countries">All countries</option>
                    <option value="Americas">Americas</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Europe">Europe</option>
                    <option value="Antarctic">Antarctic</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                </select>

                <select onChange={handleFilterByActivity}>
                    <option value="default" >Activity</option>
                   {allActivities.map(a=>{
                   return(<option key={a.id} id={a.id} value={a.name}>{a.name} - {a.id}</option>)}
                   )}
                </select>

                <span style={{marginLeft: `30px`, fontWeight:`bold`}}>Order by: </span>
                <select onChange={handleOrderPopulation}>
                    <option value="default">Population</option>
                    <option value="Population: Ascending order">Ascending order</option>
                    <option value="Population: Descending order">Descending order</option>
                </select>

                <select onChange={handleOrderAlpha}>
                    <option value="default">Alphabetically</option>
                    <option value="A - Z">Ascending (A - Z)</option>
                    <option value="Z - A">Descending (Z - A)</option>
                </select>

            </div>
            <div style={{marginTop: `10px`}}> 
                <SearchBar setSearchValue={setSearchValue} setOrders={setOrders} />
            </div>

            <div className={style.paginado}>
               
                <Paginado 
                countriesPerPage = {countriesPerPage}
                allCountries = {allCountries.length}
                paginado = {paginado}
                />
                
            </div>
            <h2 className={style.countries}>{searchValue===""? filter : "Country matched:"}</h2>
                {orders && <h3 style={{fontSize:'20px'}}>{orders}</h3>}
            
            <Cards currentCountries={currentCountries}/>
            
        </div>
    )
}

export default Home;