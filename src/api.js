import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-d1-test.herokuapp.com/api/filter'
})

export default api;