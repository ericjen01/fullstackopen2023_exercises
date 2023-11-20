/* eslint-disable react/prop-types */
import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getPersons = () => {
    const respns = axios.get(baseUrl)
    return respns.then(response => {
        console.log("data getting retrived from server...")
        return response.data
    })
}

const createPerson = (newInput) => {
    const respns = axios.post(baseUrl, newInput)
    return respns.then(response =>{        
        console.log("new input getting posted to server...")
        return response.data
    })
}

export default { 
    getPersons, 
    createPerson, 
}