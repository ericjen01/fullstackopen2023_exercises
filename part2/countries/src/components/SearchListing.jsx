import Input from "./Input"
import Countries from "./Countries"
import Country from "./Country"
import { useState } from "react"

const SearchListing = ({countries}) => {

    const [isSelected, setIsSelected] = useState(false)
    const [countryCCN3, setCounttryCCN3] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    const filteredCountries = countries.filter( 
        c => c.name.common.search(new RegExp(searchTerm, "ig")) >= 0) 
            //console.log(filteredCountries)

    const handleClick = (e) => {
            setCounttryCCN3(e.target.value)
            setIsSelected(true)
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
        setCounttryCCN3('')
        setIsSelected(false)
      }

    const chosenCountry = countries.filter(c => c.ccn3 === countryCCN3)
    const listingLength = filteredCountries.length
    const hasInput  = searchTerm !== ''
    const isNoInput = !hasInput
    const isTooLong = hasInput && listingLength > 10
    const isNoMatch = hasInput && listingLength === 0
    const isTheOne  = hasInput && listingLength === 1
    const isChosen  = hasInput && isSelected && countryCCN3 
    const isInRange = hasInput && listingLength <= 10 && listingLength > 1 && !isSelected

    return (
        <>
            <Input onUpdate={(e)=>handleChange(e)}/> {/*event handler must be fuction, not function call*/}
            <h3>Search Result</h3>
                {isNoInput && <p>enter country name in search box above</p>}
                {isTooLong && <p>too many matches, refine search term</p> }
                {isNoMatch && <p>0 match, change search term</p> }
                {isTheOne  && <Country filteredCountry={filteredCountries}/>}
                {isChosen  && <Country filteredCountry={chosenCountry}/>}
                {isInRange && 
                    <Countries filteredCountries={filteredCountries} 
                    clicked={()=>handleClick} 
                />}
        </>
    )
}

export default SearchListing;