import React, { useState } from "react";
import me from '../img/yo.jpg';
import dabi from '../img/Curriculum.jpg';
import weather_img from '../img/TORMENTA.svg';
import Navigation from './Nav';
import { useMediaQuery } from 'react-responsive'
import Breakpoints from './query';

function Who_are(props)
{

    const isDesktopOrLaptop = useMediaQuery({
        query: Breakpoints.lg
      })

    const isMobile = useMediaQuery({
        query: Breakpoints.sm
    })

    const isTablet = useMediaQuery({
        query: Breakpoints.md
    })

    return(
        <>
        <Navigation style={{
                position: "fixed",
            }}/>
        <div id="contact" style={isDesktopOrLaptop ? {} : {
               height: '385vh'
            }}>
            <div id="text-area" style={{
                padding: '8%',
                paddingBottom: '2%'
            }}>
            <a className='img-who' href='/'>
                    <img src={weather_img} alt="" style={{
                        width: 'fit-content'
                    }} height="70"/>
            </a>
            <h1>Contact us</h1>
            </div>
            <div id="us" style={isDesktopOrLaptop ? {} : {
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                alignContent: 'center',
                flexDirection: 'column'
            }}>
            <img src={ me } />
            <div className="d">
            <h2>Christian Paez</h2>
            <h3>Desarrollador web</h3>
            <hr className="line"></hr>
            <p>
        Soy un joven estudiante y desarrollador web Junior 💻. Especializado en el front-end y aprendiendo back-end, con Node.js.
        Aca debajo puedes observar los diferentes conocimientos que poseo y mis redes sociales para ponerte en contacto conmigo.
        😎 
            </p>
            <div id="listas">
            <ul className="hability">
            <li><i className="fa-brands fa-html5"></i>Html5</li>
            <li><i className="fa-brands fa-css3-alt"></i>Css3</li>
            <li><i className="fa-brands fa-js"></i>javaScript</li>
            <li><i className="fa-brands fa-node-js"></i>Node Js</li>
            <li><i className="fa-brands fa-react"></i>React Js</li>
            <li><i className="fa-brands fa-bootstrap"></i>Bootstrap</li>
            <li></li>
            </ul>  
            <ul id="social-media">
             <li>
                <a className='nav-link' href='https://www.facebook.com/ChristianTomas08' target='_BLANK'> 
                   <i className="fa-brands fa-facebook"></i>
                   Facebook
                   </a> 
            </li>   
             <li>
             <a className='nav-link' href='https://www.instagram.com/tomas_christian213/' target='_BLANK'> 
                   <i className="fa-brands fa-instagram"></i>
                   Instagram
            </a> 
             </li>
             <li>
             <a className='nav-link' href='https://github.com/RyuTsuki08/' target='_BLANK'> 
                   <i className="fa-brands fa-github"></i>
                   Github
                   </a> 
            </li>
            <li className='nav-item'>
                   <a className='nav-link' href='https://www.linkedin.com/in/tomas-a-904b34232/' target='_BLANK'> 
                   <i className="fa-brands fa-linkedin"></i>
                   LinkedIn
                   </a> 
                </li>
            </ul>
            </div>
            </div>
            </div>
            <div id="us" style={isDesktopOrLaptop ? {} : {
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                alignContent: 'center',
                flexDirection: 'column'
            }}>
            <img src={ dabi } />
            <div className="d">
            <h2>David Reyes</h2>
            <h3>Diseñador gráfico</h3>
            <h4>Creador de los logos</h4>
            <hr className="line"></hr>
            <p>
            Diseñador Gráfico Junior con basta experiencia en retoque fotográfico y modelado en 3D. Creativo y dinámico, siempre buscándole otro significado a las cosas.
            </p>
            <div id="listas">
            <ul className="hability">
            <li><span className="iconify" data-icon="file-icons:adobe-photoshop"></span>Adobe Photoshop CC</li>
            <li>
            <span className="iconify" data-icon="file-icons:adobe-illustrator"></span>   Adobe Illustrator CC
            </li>
            <li><i className="fa-brands fa-unity"></i>Unity</li>
            <li><span className="iconify" data-icon="bxl:blender"></span> Blender</li>
            <li><i className="fa-solid fa-play"></i>Sony Vegas Pro</li>
            </ul>  
            <ul id="social-media">
             <li>
                <a className='nav-link' href='https://www.facebook.com/davidreyes.oficiall' target='_BLANK'> 
                   <i className="fa-brands fa-facebook"></i>
                   Facebook
                   </a> 
            </li>   
             <li>
             <a className='nav-link' href='https://www.instagram.com/david_gierszal/' target='_BLANK'> 
                   <i className="fa-brands fa-instagram"></i>
                   Instagram
            </a> 
             </li>
             <li>
                <i className="fa-solid fa-envelope"></i>
                davidrenegocios@gmail.com
                </li>
            </ul>
            </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Who_are;