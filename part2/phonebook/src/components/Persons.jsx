const Persons = ({personsToShow}) =>(
    <ul>{ personsToShow.map((p,i) => <li key={i}>{p.name}, {p.number}</li>)}</ul>
)

export default Persons