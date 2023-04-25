import { useEffect } from "react";
import style from"./pagination.module.css"

export default function Pagination ({countriesPerPage,allCountries,pagination,currentPage,setPages}){
const pageNumbers = [];

for(let i=0; i <= Math.ceil(allCountries/countriesPerPage) - 1; i++){
    pageNumbers.push(i+1);
}

//pagination buttons previus-next

let countNumberPage = Math.ceil(allCountries/countriesPerPage)
useEffect(()=>{
    setPages(countNumberPage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[countNumberPage])

return(
        <nav>
            <ul className={style.pagination}>
                {pageNumbers && pageNumbers.map(number=>(
                <li key={number}>
                { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                <a href="#" onClick={()=>{pagination(number)}} className={currentPage === number? style.currentPage:undefined} >{number}</a>
                </li>
                ))}
            </ul>
        </nav>

      )
}