
const Countries = ({filteredCountries, clicked}) => {
     
    return (
        <ul style={{listStyleType:"none"}}>
            {
                filteredCountries.map(c => {
                   
                    const countryCCN3 = c.ccn3
                        //console.log("coungtryidd: ", countryIdd)

                    return (
                        <li 
                            key={countryCCN3} 
                            style={{margin: "5px 0"}}
                        >
                            {c.name.common} &nbsp;
                            <button value={countryCCN3} onClick={clicked()}>show</button>
                        </li>
                    )
                })
            }
                
            
        </ul>
    )
}

export default Countries