import React, { useState, useEffect } from "react";
import weather_img from '../img/ICONO_PAGINA.svg';
import rain_img from '../img/LLUVIA.svg';
import storm_img from '../img/TORMENTA.svg';
import Foggy from '../img/nublado.png';
import Sun from '../img/sun.png';
import snow from '../img/snow.png'

function WeatherForm(props)
{
    const [state, WeatherUpdate] = useState({city: '', 
    countrycode: '', title: '', description: '', 
    temp: '',lat: '', lon: '',
     humidity: '', visibility: ''});
    const getAPI = async (city = 'Caracas', cC = "VE") =>
    {
        const apikey = '4d9f48eb46b54897b39bdf70e3729f85';
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${city},${cC}&appid=${apikey}&units=metric`;
        const response = await fetch(URI);
        const data = await response.json()
        WeatherUpdate({
            city: state.city, 
            countrycode: state.countrycode, 
            title : data.weather[0].main , 
            description: data.weather[0].description,
            temp:  data.main.temp,
            lat: data.coord.lat,
            lon: data.coord.lon,
            humidity: data.main.humidity,
            visibility: data.visibility})
    }

        function PutH1(props) 
        {
            switch (state.city) {
                case '':
                return <h1>Colocate a City</h1>
                    break;
                case '1' || '2'|| '3'|| '4'|| '5'|| '6'|| '7'|| '8'|| '9'|| '0':
                    alert("You must write a city, not numbers");
                    return <h1 className="not-numbers">Not numbers, just names of citys</h1>
                    break;
                default:
                    return <h1 id="weather-location" className="h3">City: {state.city}</h1>
                    break;
            }
        }

        function PutImg(props)
        {
            switch(state.title){
                case 'Rain':
                   return <img className="weather_img" src={rain_img} />
                    break;
                case 'Drizzle':
                    return <img className="weather_img" src={rain_img} /> 
                    break;
                case 'Thunderstorm':
                    return <img className="weather_img" src={storm_img} /> 
                    break;
                case 'Clouds':
                    return <img className="weather_img" src={Foggy} />
                    break;
                case 'Clear':
                return <img className="weather_img" src={Sun} />
                break;
                case 'Snow':
                return <img className="weather_img" src={snow} />
                break;
                default:
                    return <img className="weather_img" src={weather_img} />
                    break;
            }
        }

        useEffect(()=>
        {
            Aos.init();
        }, [])

    return(
        <div id="row" className="row">
        <div id="weather-img" data-aos="fade-down">
            <PutImg />
        </div>
       <div id="agft" className="com-md-4 mx-auto text-center">
        <div className="card"  data-aos="fade-left" >
            <div className="card-body">
                <PutH1 />
                <h2 id="weather-title">Title: {state.title}</h2>
                <h3 id="weather-description">Description: {state.description}</h3>
                <p id="weather-temp">Temp: {state.temp}ºC</p>
                <ul className="list-group mt-3 pP">
                <li className="list-group-item" >Lat: {state.lat}</li>
                <li className="list-group-item" >Lon: {state.lon}</li>
                </ul>
                <ul className="list-group mt-3 pP">
                    <li id="weather-humidity" className="list-group-item">Humidity: {state.humidity}</li>
                    <li id="weather-wind" className="list-group-item">Visibility: {state.visibility}</li>
                </ul>
            </div>
        </div>
        <div className="card"  data-aos="fade-right" >
            <div className="card-body">
                <form id="w-form">
                    <div className="form-group">
                        <label className="label">City</label>
                        <input type="text" id="city" className="form-control" placeholder="City" value={state.city} onChange={(a) => {
                            WeatherUpdate({
                                city: state.city = a.target.value.toUpperCase(),
                                countrycode : state.countrycode
                            })
                        }}/>
                    </div>
                    <div className="form-group">
                        <label className="label"> Country Code (ve, mx, pe, co)</label>
                        <input type="text" id="countryCode" className="form-control" placeholder="Country Code" value={state.countrycode} onChange={(i) => {
                            WeatherUpdate({
                                city : state.city,
                                countrycode: state.countrycode = i.target.value.toUpperCase()
                            })
                        }}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-dark btn-block" id="w-change-btn" onClick={(P) => 
                        {
                            P.preventDefault();
                            switch (state.city && state.countrycode) {
                                case '':
                                alert('You must send something');
                                    break;
                                default:
                                    getAPI(state.city, state.countrycode);
                                    break;
                            }
                            
                        }}>
                            Save changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
       </div>
        </div>
    )
}

export default WeatherForm;
