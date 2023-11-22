import Languages from "./Languages"
import Flag from "./Flag"

const Country = ({filteredCountry}) => {

    const country = filteredCountry[0]
    const countryName = country.name.common
    const countryCapital = country.capital
    const countryArea = country.area
    const countryLanguages = country.languages
    const countryFlags = country.flags
    console.log(filteredCountry)

return(
    <>
        <h1>{countryName}</h1>
        <span>Capital {countryCapital}</span><br/>
        <span>Area {countryArea}</span><br/>
        <h4>Languages</h4>
        <Languages languages={countryLanguages}/>
        <Flag flags={countryFlags}/>
    </>
)
}

export default Country;