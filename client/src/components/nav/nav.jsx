import {Link} from "react-router-dom";

const nav = (props)=>{
    return(
        <div>
            <h1>ACA va el NAV</h1>
            <Link to="/home"><p>Home</p></Link>
            <Link to="/form"><p>Form</p></Link>
        </div>
    )
}

export default nav;