import axios from 'axios'

const Instance = axios.create(
    {
        baseURL : 'https://api.escuelajs.co/api/v1'
    }
)

export default Instance