import { useState, useEffect } from 'react'
import {getAll} from './services/countries'
import Input from './components/Input'
import SearchListing from './components/SearchListing'


const App = () =>{

  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect( () =>{
    const effectHook = () => getAll()
    .then(returnedCountries =>{
      setCountries(returnedCountries)
    })
    effectHook()

  },[])

  const handleChange = (e) => setSearchTerm(e.target.value)
  
  //const filteredCountries = countries.filter(c => c.name.common.search(new RegExp(searchTerm, 'ig')) >=0 )


  console.log("searchTerm: ", searchTerm)

  return (
    <>
      <h2>Countries Filter</h2>
      <Input onUpdate={(e)=>handleChange(e)}/> {/*event handler must be a fuction, not a function call*/}
      <SearchListing countries={countries} searchTerm={searchTerm}/>
    </>
  )
}

export default App
