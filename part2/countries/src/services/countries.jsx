import axios from 'axios'
const baseUrl= 'https://studies.cs.helsinki.fi/restcountries/'

export const getAll = () =>{
    const rsp = axios.get(`${baseUrl}/api/all`)
    return rsp.then(response =>(
        response.data
    ))
}
