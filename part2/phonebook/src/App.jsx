/* eslint-disable react/prop-types */
import { useState } from 'react'
import Persons from './components/Persons'
import Alert from './components/Alert'
import Search from './components/Search'
import FormAddPerson from './components/FormAddPerson'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }  
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const personsToShow = searchTerm.length > 0 
    ? persons.filter(p => p.name.search(new RegExp(searchTerm, 'ig')) >= 0 ) 
    : persons

  const submitAddition = (e) =>{
    e.preventDefault();

    const newPersonToAdd = {name:newName, number:newNumber}
    const duplicateName = persons.find(p => p.name === newName)
    
    duplicateName 
    ? setMessage(`${String.fromCharCode(0x26A0)} " ${newName} " is already added to phonebook`)
    : setPersons(persons.concat(newPersonToAdd))

    setTimeout(() => { setMessage(null) }, 4000)
  }
  
  const managePersonChange = (e) => setNewName(e.target.value)
  const manageNumberChange = (e) => setNewNumber(e.target.value)
  const manageSearchChange = (e) => setSearchTerm(e.target.value)


  return (
    <div>
      <h2>Phonebook</h2>

      <Alert message={message}>test</Alert>

      <Search manageSearchChange={(e) => manageSearchChange(e) }/>

      <h3>Add a New Contact</h3>

      <FormAddPerson 
        submitAddition={ (e) => submitAddition(e)} 
        managePersonChange={ (e) => managePersonChange(e)} 
        manageNumberChange={ (e) => manageNumberChange(e)}/>
  
      <h3>Numbers</h3>

      <Persons personsToShow={personsToShow}/>

    </div>
  )
}

export default App