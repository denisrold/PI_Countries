import {Link} from "react-router-dom";
import style from"./nav.module.css"
import logo from"../utils/img/aeroplane.gif"

const Nav = ()=>{
    return(
        <nav className={style.nav}>

             <img src={logo} alt="imagen" className={style.logo}/> 
             
            <h1 className={style.title}>Around the world!</h1>
            <div className={style.link}>
                <ul className={style.list}>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/activities">Activities</Link></li>
                    <li><Link to="/form">Create activity</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;