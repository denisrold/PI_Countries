import {Link} from"react-router-dom"
//import styles from"./landingpage.module.css"

const LandingPage = ()=>{

    return(
        <div>
            <div>
            </div>
            <h1>Esta es mi landing page</h1>
            <p>Aca iria mi contenido</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                 cpiditate dicta pariatur sunt dolorum voluptatum. Molestias doloremque
                  nobis aliquid repudiandae accusamus, natus, delectus placeat 
                  perspiciatis aspernatur cupiditate repellat, nam soluta.</p>
            <Link to="/home">
              <button>To Home</button>
            </Link>
        </div>
    )
}

export default LandingPage;

/* deberás crear una página de inicio o bienvenida con:
-  Alguna imagen de fondo representativa al proyecto.*/
