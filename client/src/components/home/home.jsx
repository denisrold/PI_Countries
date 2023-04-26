import Cards from "../cards/cards";
import { useEffect, useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { getAllCountries,getAllActivity, filterByRegion,filterByActivity, orderAlpha, orderPopulation } from "../redux/actions";
import SearchBar from "../searchbar/searchbar";
import Pagination from"../pagination/pagination";
import paginationAux from "../pagination/paginationAux";
import style from"./home.module.css"
import errorOrder from"./errorOrders"


const Home = ()=>{

    const dispatch = useDispatch();
    
    // get countries db
    useEffect(()=>{
    dispatch(getAllCountries());
    dispatch(getAllActivity());
    },[dispatch])
    
    //get global state
    const allCountries = useSelector(state => state.allCountries);
    const allActivities = useSelector(state => state.allActivities);
    
    //pagination congifuration
    const [currentPage, setCurrentPage] = useState(1);

    /* eslint-disable-next-line no-unused-vars */
    const [countriesPerPage, setCountriesPerPage] = useState(10);
  
    const currentCountries = paginationAux(currentPage, countriesPerPage, allCountries);
    
    const [pages, setPages] =useState({
    })
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    //info state messages 
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
            {/* SearchBar */}
            <div style={{marginTop: `10px`}}> 
                <SearchBar 
                setSearchValue={setSearchValue}
                setOrders={setOrders} 
                setCurrentPage={setCurrentPage}
                />
            </div>

            {/* Prev-Next button pagination */}
            <button className={currentPage === 1?style.disabled:style.pageMove} onClick={()=>{pagination(currentPage - 1)}} disabled={currentPage === 1}>Prev</button>
            <span className={currentPage-1<  1? style.disabledPage:style.currentPageNextPrev}>{currentPage-1}</span>
            <span className={style.currentPageTop}>{currentPage}</span>
            <span className={currentPage+1> pages? style.disabledPage:style.currentPageNextPrev}>{currentPage+1}</span>
            <button className={currentPage=== pages?style.disabled:style.pageMove}onClick={()=>{pagination(currentPage +1)}} disabled={currentPage=== pages}>Next</button>
            
            {/* Filter & Order State Message */}
            <h2 className={style.countries}>{searchValue===""? filter : "Country matched:"}</h2>
                {orders && <h3 style={{fontSize:'20px' , marginTop:"-20px"}}>{orders}</h3>}
            
            {/* Cards render*/}
            <Cards currentCountries={currentCountries}/>
          
           {/* Pagination index render */}
            <div>
               
               <Pagination 
               currentPage = {currentPage}
               countriesPerPage = {countriesPerPage}
               allCountries = {allCountries.length}
               pagination = {pagination}
               setPages={setPages}
               />
               
           </div>
        </div>
    )
}

export default Home;