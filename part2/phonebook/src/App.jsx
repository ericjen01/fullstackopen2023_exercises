/* eslint-disable react/prop-types */
import { useState } from 'react'

const Person = ({person, key}) =>{
  return(
    <li key={key}>{person.name}</li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const submitAddition = (e) =>{
    e.preventDefault();
    const person = {name:newName}
    console.log(person)
    setPersons(persons.concat(person))
    console.log(persons)
  }

  const handlePersonChange = (e) =>{
    e.preventDefault();
    console.log(e.target.value)
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitAddition}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
          {persons.map((p,i)=>(
            <Person person={p} key={i}/>
          ))}
        </ul>
    </div>
  )
}

export default App