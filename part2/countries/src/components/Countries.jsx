
const Countries = ({filteredCountries}) => {
     
    return (
        <ul style={{listStyleType:"none"}}>
            {filteredCountries.map(c => (
                <li key={c.altSpellings[0]}>{c.name.common}</li>
            ))}
        </ul>
    )
}

export default Countries