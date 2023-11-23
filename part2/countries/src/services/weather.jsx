import axios from 'axios'
const baseURL = 'https://api.openweathermap.org/data/3.0/onecall?'

export const getWeather = ({capitalLatLon}) =>{
    const capitalLat = capitalLatLon[0] 
    const capitalLon = capitalLatLon[1]
    //const countryCapitals = country.capital
    const api_key = import.meta.env.VITE_API_KEY

        console.log("capitalLatLon: ", capitalLatLon)
        console.log(api_key)

    const rsp = axios.get(`${baseURL}lat=${capitalLat}&lon=${capitalLon}&units=metric&appid=${api_key}`)
    return rsp.then(response =>(
        response.data
    ))
}
