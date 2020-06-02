const dotenv = require('dotenv')

dotenv.config()

const fetch = require('node-fetch')

const { API_URL, API_KEY } = process.env

class MovieController {
  async upcoming(req, res) {
    
  }

  async details(req, res) {

  }

  async genres(req, res) {

  }

  async search(req, res) {

  }

  async rating(req, res) {

  }
}

export default new MovieController()