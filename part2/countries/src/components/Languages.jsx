
const Languages = ({languages}) => {
    
    const countryLanguages = Object.values(languages)
        //console.log(Object.values(languages))

    return (
        <ul>
            {countryLanguages.map(lan => (
                <li key={lan}>{lan}</li>
            ))}
        </ul>
    )
} 

export default Languages