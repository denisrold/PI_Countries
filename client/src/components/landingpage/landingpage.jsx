import {Link} from"react-router-dom"
import style from"./landingpage.module.css"
//import styles from"./landingpage.module.css"

const LandingPage = ()=>{

    return(
        <div className={style.lateral}>
            <div className={style.container}>
            <h1>AROUND THE WORLD</h1>
                <div>
                    <p>Welcome to our <b>countries</b> and <b>activities</b> website!</p>
                    <p>Are you ready to discover <b>the best</b> that the world has to offer?</p>
                    <p>From the paradisiacal beaches of the Caribbean to the snowy peaks of the Alps,our site will take you </p>
                    <p> on a journey <b>full of adventures and emotions</b> in some of the most incredible places in the world!</p>
                    <p>Are you <b>ready to start</b> your dream journey? Explore our site <b>now</b> and be inspired by <b>everything we have to offer</b>!</p>
                </div>
            </div>
            <Link to="/home">
              <button className={style.button}>Discover more</button>
            </Link>
        </div>
    )
}

export default LandingPage;
