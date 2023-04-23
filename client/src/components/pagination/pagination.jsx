import style from"./pagination.module.css"

export default function Pagination ({countriesPerPage,allCountries,pagination,currentPage}){
const pageNumbers = [];

for(let i=0; i <= Math.ceil(allCountries/countriesPerPage) - 1; i++){
    pageNumbers.push(i+1);
}

return(
        <nav>
            <ul className={style.pagination}>
                <button className={currentPage === 1?style.disabled:style.pageMove} onClick={()=>{pagination(currentPage - 1)}} disabled={currentPage === 1}>back</button>
                {pageNumbers && pageNumbers.map(number=>(
                <li key={number}>
                { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                <a href="#" onClick={()=>{pagination(number)}} className={currentPage === number? style.currentPage:undefined} >{number}</a>
                </li>
                ))}
           
                <button className={currentPage=== pageNumbers.length?style.disabled:style.pageMove}onClick={()=>{pagination(currentPage +1)}} disabled={currentPage=== pageNumbers.length}>next</button>
            </ul>
        </nav>

      )
}