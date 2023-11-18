/* eslint-disable react/prop-types */
import { useState } from 'react'
import Person from './components/Person'


const Alert = ({message}) =>(
  message===null? (null) :  (<h4>{message}</h4>) 
)

const App = () => {

  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState('')

  const duplicateName = persons.find(p => p.name === newName)

  const submitAddition = (e) =>{
    e.preventDefault();

    const person = {name:newName}
  
    duplicateName 
    ? setMessage(`" ${newName} " is already added to phonebook`)
    : setPersons(persons.concat(person))

    setTimeout(() => {
      setMessage(null)
    }, 4000)
  }
  
  const handlePersonChange = (e) => setNewName(e.target.value)
  const handleNumberChange = (e) => setNewNumber(e.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Alert message={message}>test</Alert>
      <form onSubmit={submitAddition}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
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