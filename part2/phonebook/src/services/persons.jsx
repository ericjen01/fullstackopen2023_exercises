/* eslint-disable react/prop-types */
import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getPersons = () => {
    const resp = axios.get(baseUrl)
    return resp.then(response => {
        console.log("server responded")
        console.log("response.data: ", response.data)
        return response.data
    })
}

export default { getPersons }