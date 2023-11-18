/* eslint-disable react/prop-types */
import { useState } from 'react'
import Person from './components/Person'


const App = () => {

  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]) 

  const [newName, setNewName] = useState('')

  const duplicateName = persons.find(p => p.name === newName)

  const submitAddition = (e) =>{
    e.preventDefault();

    const person = {name:newName}
    
    duplicateName ? alert(`${newName} is already added to phonebook`) 
    : setPersons(persons.concat(person))
      
  }

  const handlePersonChange = (e) => setNewName(e.target.value)

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