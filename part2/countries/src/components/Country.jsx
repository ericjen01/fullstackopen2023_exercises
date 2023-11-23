import Languages from "./Languages"
import {Flag} from "./Icons"
import Weather from "./Weather" 

const Country = ({filteredCountry}) => {

    const country = filteredCountry[0]
    const countryName = country.name.common
    const countryCapitals = country.capital.join(', ')
    const countryArea = country.area
    const countryLanguages = country.languages
    const countryFlags = country.flags
        console.log(filteredCountry)

return(
    <>
        <h1>{countryName}</h1>
        <span>Capital(s)- {countryCapitals}</span><br/>
        <span>Executive Capital- {country.capital[0]}</span><br/>
        <span>Area- {countryArea}</span><br/>
        <h4>Languages</h4>
        <Languages languages={countryLanguages}/>
        <Flag flags={countryFlags}/>
        <Weather country={country} />
    </>
)
}

export default Country;