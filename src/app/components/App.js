import React, { useEffect, useState } from "react";
import WeatherForm from "./Weather";
import Navigation from './Nav';
import bgSky from '../../../public/5833.jpg'
import headerImg from '../../../public/one.jpg'
import { useMediaQuery } from 'react-responsive'
import Breakpoints from './query';
const openWAPI = 'https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png';

{/* sometimes I was wanted be a CPU, maybe don't feel, just think and does the necesary */}

function App(props)
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

    const [country, setCountry] = useState('');

    return(
        <div id="root">
            <Navigation />
            <header className="header" style={{
                backgroundImage: `linear-gradient(to right, #0000006b, #20202079), url(${bgSky})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
            <div id="card" style={{
                width: isMobile ? '40vw' : '90vw'
            }}>
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