import { useState, useEffect } from 'react'
import {getAll} from './services/countries'
import SearchListing from './components/SearchListing'

const App = () =>{

  const [countries, setCountries] = useState([])

  useEffect( () =>{
    const effectHook = () => getAll()
    .then(returnedCountries =>{
      setCountries(returnedCountries)
    })
    effectHook()
  },[])

  return (
    <>
      <h2>Countries Filter</h2>
      <SearchListing countries={countries} />
    </>
  )
}

export default App
