import Countries from "./Countries"
import Country from "./Country"

const SearchListing = ({countries, searchTerm}) => {

    const filteredCountries = countries.filter( 
        c => c.name.common.search(new RegExp(searchTerm, "ig")) >= 0) 
            //console.log(filteredCountries)
            //console.log("filtered: ", filteredCountries.length)

    const listingLength = filteredCountries.length

    const isNoInput = searchTerm === ''
    const isTooLong = searchTerm !== '' && listingLength > 10
    const isNoMatch = searchTerm !== '' && listingLength === 0
    const isInRange = searchTerm !== '' && listingLength <= 10 && listingLength > 1
    const isTheOne  = searchTerm !== '' && listingLength === 1

    return (
        <>
            <h3>Search Result</h3>
                {isNoInput && <p>enter country name in search box above</p>}
                {isTooLong && <p>too many matches, refine search term</p> }
                {isNoMatch && <p>0 match, change search term</p> }
                {isInRange && <Countries filteredCountries={filteredCountries}/>}
                {isTheOne  && <Country filteredCountry={filteredCountries}/>}
        </>
    )
}

export default SearchListing;