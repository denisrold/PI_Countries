import {Link} from"react-router-dom"
import style from"./landingpage.module.css"
//import styles from"./landingpage.module.css"

const LandingPage = ()=>{

    return(
        <div>
            <div className={style.container}>
            <h1>COUNTRY APP</h1>
                <div>
                    <p>Welcome to our countries and activities website! Are you ready to discover the best that the world has to offer?</p>
                    <p>From the paradisiacal beaches of the Caribbean to the snowy peaks of the Alps, </p>
                    <p>our site will take you on a journey full of adventures and emotions in some of the most incredible places in the world.</p>
                    <p>Whether you are looking for a relaxing getaway or an exciting experience,</p>
                    <p>our selection of activities and destinations around the world will leave you with unforgettable memories.</p> 
                    <p>Are you ready to start your dream journey? Explore our site now and be inspired by everything we have to offer!</p>
                </div>
            </div>
            <Link to="/home">
              <button className={style.button}>Discover more</button>
            </Link>
        </div>
    )
}

export default LandingPage;
