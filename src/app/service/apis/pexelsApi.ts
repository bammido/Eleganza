import axios from 'axios'


export const pexelsApi = axios.create({
    baseURL: 'https://api.pexels.com/v1',
    headers: {
        Authorization: 'iPsWcwRXzfXsqpzq86Plk5IRDDENK6PaixJUbmVVJVjZ9OiEMBKYwgMb'
    }
})