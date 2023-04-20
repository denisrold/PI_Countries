import style from"./paginado.module.css"

export default function Paginado ({countriesPerPage,allCountries,paginado}){
const pageNumbers = [];

for(let i=0; i <= Math.ceil(allCountries/countriesPerPage) - 1; i++){
    pageNumbers.push(i+1);
}

return(
        <nav>
            <ul className={style.paginado}>
                {pageNumbers && pageNumbers.map(number=>(
                <li key={number}>
                { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                <a href="#" onClick={()=>{paginado(number)}} >{number}</a>
                </li>
                ))}
            </ul>
        </nav>

      )
}