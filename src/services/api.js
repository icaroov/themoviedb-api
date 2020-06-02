const axios = require('axios')

export const API_KEY = 'd01f7cea8c3e1cf72d7da17fe6f21e47'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie'
  // https://api.themoviedb.org/3/movie/553?api_key=d01f7cea8c3e1cf72d7da17fe6f21e47
})

export default api