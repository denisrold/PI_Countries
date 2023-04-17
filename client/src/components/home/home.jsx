import Cards from "../cards/cards";
import { useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch} from"react-redux";
import { getAllCountries } from "../redux/actions";
import {filterByRegion} from "../redux/actions";
import Paginado from"../paginado/paginado";


const Home = ()=>{
    const dispatch = useDispatch();
  
    useEffect(()=>{
    dispatch(getAllCountries())
    },[])

    const allCountries = useSelector(state => state.allCountries);

    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const indexLastCountry = currentPage * countriesPerPage; // 10
    const indexFirstCountry = indexLastCountry - countriesPerPage; //0
    const currentCountries = allCountries.slice(indexFirstCountry,indexLastCountry);
 
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    const allcountriesHandler = ()=>{
        dispatch(getAllCountries())
    };

    const handleFilterByRegion= (event)=>{
       // if(allCountries.length < 250) await dispatch(getAllCountries()); OTRA SOLUCION AL FILTER
        dispatch(filterByRegion(event.target.value))
    }
    return(
        <div>
            <h1>This is Countries time's!</h1>
            <button onClick={allcountriesHandler}> Show all coutries</button>
            <div>
                <select onChange={handleFilterByRegion}>
                    <option value="All">Filtrar por region</option>
                    <option value="Americas">Americas</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Europe">Europe</option>
                    <option value="Antarctic">Antarctic</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>

                </select>
                <select>
                    <option value="filter">Filtrar paises</option>
                    <option value="actividad">Por Actividad turistica</option>
                </select>
                <select>
                    <option value="order">Ordenar</option>
                    <option value="population">por cantidad de población</option>
                    <option value="alpha">Ordenar Alfabeticamente</option>
                    <option value="ascen">Orden Ascendente</option>
                    <option value="descen">Orden Descendente</option>
                </select>
            </div>
            <Paginado 
            countriesPerPage = {countriesPerPage}
            allCountries = {allCountries.length}
            paginado = {paginado}
            />
            <Cards currentCountries={currentCountries}/>
        </div>
    )
}

export default Home;
/*
📍 HOME PAGE |** la página principal de tu SPA debe contener:
-  SearchBar: un input de búsqueda para encontrar países por nombre.
-  Sector en el que se vea un listado de cards con los países. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta **`GET /countries`** y deberá mostrar su:
   -  Imagen de la bandera.
   -  Nombre.
   -  Continente.
-  Botones/Opciones para **filtrar** por continente y por tipo de actividad turística.
-  Botones/Opciones para **ordenar** tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población.
-  Paginado: el listado de países se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 10 países por página.
 */