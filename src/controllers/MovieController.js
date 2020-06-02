const dotenv = require('dotenv')

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

  async genres(req, res) {
    const url = `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`

    let response = await fetch(url)
    let data = await response.json()

    return res.status(200).send(data.genres)
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
}

module.exports = new MovieController()