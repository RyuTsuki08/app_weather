import React, { useEffect, useState } from "react";
import WeatherForm from "./Weather";
import Navigation from './Nav';
import bgSky from '../../../public/5833.jpg'
import headerImg from '../../../public/one.jpg'
const openWAPI = 'https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png';

{/* sometimes I was wanted be a CPU, maybe don't feel, just think and does the necesary */}

function App(props)
{
    const [country, setCountry] = useState('');

    useEffect(()=>
    {
        let nav = document.getElementById('navigation');
        window.addEventListener('scroll', (e) => 
        {
            nav.style.height = '8vh'
        })
    }, [])
    return(
        <div id="root">
            <Navigation />
            <header className="header">
            <div id="card" >
            <div className="card-body"  data-aos="zoom-in">
            <h1>App of weather</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>
        </div>
            </header>
            <WeatherForm />
        </div>
    )
}

export default App;