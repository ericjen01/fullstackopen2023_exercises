import './index.css'
import { useState, useEffect} from 'react'
import { warning } from './components/Icons'
import personsService from './services/persons'
import Persons from './components/Persons'
import Notification from './components/Notification'
import Search from './components/Search'
import FormAddPerson from './components/FormAddPerson'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const personsToShow = searchTerm.length > 0 
    ? persons.filter(p => p.name.search(new RegExp(searchTerm, 'ig')) >= 0 ) 
    : persons

  useEffect(()=>{
    const effectHook= () =>{
      personsService.getPersons().then(response=>{
        setPersons(response)
      })
    }
    effectHook()
  },[])


  const submitAddition = (e) =>{
    e.preventDefault();

    const newPersonToAdd = {name:newName, number:newNumber}
    const duplicateInput = persons.find(p => p.name === newPersonToAdd.name)
    const msg = `${warning} "${newName}" already exists. update phone # to "${newNumber}" ?`
    
    if(!duplicateInput && newName !== '' && newNumber !== ''){
      personsService
      .createPerson(newPersonToAdd)
      .then(serverResponse => {
        setPersons(persons.concat(serverResponse))
      })
      return
    }

    if(!duplicateInput && (newName === '' || newNumber === '')){ 
      console.log(persons)
      setMessage({content: `${warning} name or number can't be empty`, type: "error"})
      return
    }

    if(duplicateInput && newNumber ===''){
      setMessage({content: `${warning} number can't be empty`, type: "error"})
      return
    }

    const okByUser = window.confirm(msg)

    if(duplicateInput && okByUser === false){ 
      setMessage({content: "action cancelled", type: "notification"})
      return 
    }

    if(duplicateInput && okByUser === true && newNumber !==''){ 
      personsService
      .updatePerson(duplicateInput.id, newPersonToAdd)
      .then(returnedPerson => {
        setPersons(persons.map(p=>p.id === returnedPerson.id? returnedPerson : p))
        setMessage({content:`number updated for ${newName}`, type:"notification"})
        return
      })
    }

/*
    if(duplicateInput){
      if(window.confirm(msg) === true){
        personsService.updatePerson(duplicateInput.id, newPersonToAdd)
        .then(returnedPErson => {
        //console.log("acceptedPerson: ", acceptedPerson)
        setPersons(persons.map(p=>p.id === returnedPErson.id? returnedPErson : p))
        setMessage({content: `number updated for ${newName}`, type: "notification"})
        })
      } 
      setMessage({content: "cancelled", type: "notification"}) 
    }
    else if(newName !== ""){
      personsService.createPerson(newPersonToAdd)
      .then(serverResponse => {
      setPersons(persons.concat(serverResponse))
      setMessage({content: `${newName} created`, type: "notification"})
      })
    }else{setMessage({content: `${warning} contact name cannot be empty`, type: "error"})}
*/
    setTimeout(() => { setMessage(null) }, 3000)
  }


  const removePerson = (id) =>{
    const name = (persons.filter(p => p.id === id)).name
    const number = (persons.filter(p => p.id === id)).number
    const message = `delete ${name} ${number}?`

    if(window.confirm(message) === true){
      personsService.removePerson(id).then(() =>{
        //console.log("removal status: ", response.status)
        setPersons(persons.filter(p => p.id !== id))
        setMessage({content: "person removed", type: "notification"}) 
      })
    }
    else {
      setMessage({content: "aborted", type: "notification"}) 
    }
  }
  
  const managePersonChange = (e) => setNewName(e.target.value)
  const manageNumberChange = (e) => setNewNumber(e.target.value)
  const manageSearchChange = (e) => setSearchTerm(e.target.value)


  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message}/>

      <Search manageSearchChange={(e) => manageSearchChange(e)}/>

      <h3>Add a New Contact</h3>

      <FormAddPerson 
        submitAddition={ (e) => submitAddition(e) } 
        managePersonChange={ (e) => managePersonChange(e) } 
        manageNumberChange={ (e) => manageNumberChange(e) }/>
  
      <h3>Numbers</h3>

      <Persons personsToShow={personsToShow} removePerson={removePerson}/>

    </div>
  )
}

export default App