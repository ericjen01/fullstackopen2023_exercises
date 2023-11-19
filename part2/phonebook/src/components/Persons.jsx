
/* eslint-disable react/prop-types */
const Person = ({personsToShow}) =>(
  personsToShow.map((p,i) =>
  (
    <li key={i}>{p.name}</li>
    )
  )
)

export default Person