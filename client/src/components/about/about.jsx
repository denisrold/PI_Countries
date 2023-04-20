import style from"./about.module.css"
import ghl from"../utils/img/ghl.png"
import linkedinlogo from"../utils/img/LILOG1.png"
const About = () =>{
    const handleClickGH = ()=>{
        window.open('https://github.com/denisrold', '_blank')
        }
    const handleClickLI = ()=>{
            window.open('https://www.linkedin.com/in/denisrold/', '_blank')
            }
    return (
        <div className={style.about}>
            <h1>About Countries:</h1>
            <div className={style.containertext}>
                <span>
                Countries is a section dedicated to providing useful information and data about countries around the world.
                It is a simulation of an API with demographic, geographic, and tourism data.</span>
                <span>The source of the collected information corresponds to the REST API of 'https://restcountries.com/v3/all'.</span>

                <h4>This is an individual and integrative project of SOYHENRY, created by Denis H. Roldán.</h4>

                <h3>About me:</h3>

                <span>Hola a todos, me llamo Denis. Estoy emocionado de seguir explorando y aprendiendo en este mundo en constante evolución de la tecnología
                y espero poder compartir mis experiencias y conocimientos contigo a travez de este y futuros proyectos. 
                Gracias por visitar este proyecto y no dudes en contactarme si tienes alguna pregunta o si quieres hablar sobre algún proyecto que tengas en mente.                           
                </span>
                <br/>
                <br/>
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