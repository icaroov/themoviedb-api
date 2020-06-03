const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

dotenv.config()

const fetch = require('node-fetch')

const { API_URL, API_KEY } = process.env

class MovieController {

  async upcoming(req, res) {
    const { page } = req.query;
    const urlMoviesUpcoming = `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
  
    let response = await fetch(urlMoviesUpcoming)
    let data = await response.json()
  
    return res.status(200).send(data.results)
  }

  async details(req, res) {
    const { id } = req.params;
    const url = `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`

    let response = await fetch(url)
    let data = await response.json()

    return res.status(200).send(data)
  }

  async credits(req, res) {
    const { id } = req.params
    const url = `${API_URL}/movie/${id}/credits?api_key=${API_KEY}`

    let response = await fetch(url)
    let data = await response.json()

    return res.status(200).send(data)
  }

  async reviews(req, res) {
    const { id } = req.params
    const url = `${API_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`

    let response = await fetch(url)
    let data = await response.json()

    return res.status(200).send(data)
  }

  async filter(req, res) {
    const url = `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_video=false&page=1`

    let response = await fetch(url)
    let data = await response.json()

    return res.status(200).send(data)
  }

  authenticate(req, res) {
    const user = {
      id: 1,
      name: 'icaro'
    }

    const token = jwt.sign({ id: user.id }, 'secret', {
      expiresIn: 86400,
    })

   res.send({user, token})
  }
}

module.exports = new MovieController()