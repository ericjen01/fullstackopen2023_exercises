export const WeatherIcon = ({weatherData}) =>{
    console.log(weatherData)
    const iconId = weatherData.weather[0].icon
    const baseURL = 'https://openweathermap.org/img/wn'
            //console.log("weatherdata.weather", iconId)
    return(
        <>
            <img 
                src={`${baseURL}/${iconId}@2x.png`} 
                style={{objectFit:"cover"}}  
            />
        </>
    ) 
}

export const Flag = ({flags}) =>{
    const src = flags.svg
    const alt = flags.alt
    return(
        <>
            <img 
                src={src} 
                alt={alt} 
                style={{objectFit:"cover", boxShadow:"1px 1px 5px 5px #ccc"}} 
                width="300" 
            />
        </>
    ) 
}

export default {Flag, WeatherIcon}