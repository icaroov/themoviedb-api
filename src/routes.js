const { Router } = require('express')

const MovieController = require('./controllers/MovieController')

const routes = new Router()

routes.get("/movies/upcoming", MovieController.upcoming)
routes.get("/movies/genres", MovieController.genres)
routes.get("/movie/:id/credits", MovieController.credits)
routes.get("/movies/details/:id", MovieController.details)
routes.get("/movie/:id/reviews", MovieController.reviews)

module.exports = routes
