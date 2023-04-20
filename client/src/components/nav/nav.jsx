import {Link} from "react-router-dom";
import style from"./nav.module.css"

const Nav = ()=>{
    return(
        <nav className={style.nav}>
            <span className={style.logo}>logo</span>
            <h1 className={style.title}>This is Countries time's!</h1>
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