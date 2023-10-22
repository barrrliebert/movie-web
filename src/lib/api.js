import axios from 'axios'

const apiKey = '0d12dc45d21e4ed7e110b9ad8d1e293e'
const baseUrl = 'https://api.themoviedb.org/3'
export const imageUrl = 'https://image.tmdb.org/t/p/original'

const apiAxios = axios.create({
    baseURL: baseUrl,
    params: {
        api_key: apiKey,
    }
})

export default apiAxios