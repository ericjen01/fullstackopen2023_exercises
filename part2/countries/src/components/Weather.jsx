import { useEffect, useState } from 'react'
import {getWeather} from '../services/weather'
import { WeatherIcon } from './Icons'

const Weather = ({country}) => {
    const executiveCapital = country.capital[0]
    const capitalLatLon = country.capitalInfo.latlng
    const [weatherData, setWeatherData] = useState('')

    useEffect(() =>{
        const effectHook = () =>getWeather({capitalLatLon}).then(returnedWeather =>{
            setWeatherData(returnedWeather.current)
        })
        effectHook()
    },[capitalLatLon])

    const temp = weatherData.temp
    const feelsLike = weatherData.feels_like
    const windSpeed = weatherData.wind_speed

    return(
       <>
        <h3>Weather in &{executiveCapital}</h3>
        <p>tempurature {temp} <br/>
            <span>feels like {feelsLike}</span>
        </p>
        <WeatherIcon weatherData={weatherData}/><br/>
        <span>Wind Speeed {windSpeed}</span>
       </> 
    )
    

}

export default Weather