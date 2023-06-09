import style from"./about.module.css"
import ghl from"../utils/img/ghl2.png"
import linkedinlogo from"../utils/img/LILOG1.png"
import { handleClickGH, handleClickSource, handleClickLI} from"./handlerLinks"

const About = () =>{     

    return (
        <div className={style.about}>
            <h2>About Around the world!:</h2>
            <div className={style.containertext}>
                <span style={{fontSize:'18px'}}>
                This countries project is a section dedicated to providing useful information and data about countries around the world.
                It is a simulation of an API with demographic, geographic, and tourism data.</span>
                <h4 style={{fontSize:'16.5px'}}>This is an individual and integrative project of SOYHENRY, created by Denis H. Roldán.</h4>
                <p style={{fontSize:'17px'}}>The source of the information corresponds to the REST API of: <span className={style.linkSource} onClick={handleClickSource}>https://restcountries.com/v3/all</span></p>
                <h2 style={{marginTop:'-3px'}}>About me:</h2>
                <span style={{fontSize:'17px'}}>Hola a todos, me llamo Denis. Estoy emocionado de seguir explorando y aprendiendo en este mundo en constante evolución de la tecnología
                y espero poder compartir mis experiencias y conocimientos contigo a travez de este y futuros proyectos. 
                Gracias por visitar este proyecto y no dudes en contactarme si tienes alguna pregunta o si quieres hablar sobre algún proyecto que tengas en mente.                           
                </span>
                <br/>
                <br/>
                <span  className={style.follow}>Follow me on:</span>
                <div className={style.orderLog}>
                    <div>   
                        <p><b>Github:</b></p>
                        <img src={ghl} alt="imagen" onClick={handleClickGH} className={style.logos}/>
                    </div>
                    <div>
                        <p><b>LinkedIn:</b></p>
                        <img src={linkedinlogo} alt="imagen" onClick={handleClickLI} className={style.logos}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;