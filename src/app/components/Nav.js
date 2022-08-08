import React, { useEffect, useState } from 'react';
import weather_img from '../img/ICONO_PAGINA.svg';
import { Link } from "react-router-dom";

function Navigation(props)
{
    return(
        <nav id='navigation' className="navbar navbar-expand-lg fixed-top">
            <div className='container'>
                <a className='navbar-brand' href='/'>
                    <img src={weather_img} alt="" width="100" height="70"/>
                App Weather
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className='nav-item'><a className='navbar-link' href="https://openweathermap.org/" target='__BLANK'>OpenWeather</a></li>
                <li className='nav-item'><Link className='navbar-link' to="/contact-us">Contact us</Link></li>
                </ul>

                <ul className='navbar-nav nav-flex-icons'>
                <li className='nav-item'>
                   <a className='nav-link' href='https://www.facebook.com/ChristianTomas08' target='_BLANK'> 
                   <i className="fa-brands fa-facebook"></i>
                   </a> 
                </li>
                <li className='nav-item'>
                   <a className='nav-link' href='https://www.linkedin.com/in/tomas-a-904b34232/' target='_BLANK'> 
                   <i className="fa-brands fa-linkedin"></i>
                   </a> 
                </li>
                <li className='nav-item'>
                   <a className='nav-link' href='https://www.instagram.com/tomas_christian213/' target='_BLANK'> 
                   <i className="fa-brands fa-instagram"></i>
                   </a> 
                </li>
                <li className='nav-item'>
                   <a className='nav-link' href='https://github.com/RyuTsuki08/' target='_BLANK'> 
                   <i className="fa-brands fa-github"></i>
                   </a> 
                </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;