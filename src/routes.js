const { Router } = require('express')

const MovieController = require('./controllers/MovieController')

const logRequest = require('./middlewares/logRequest')

const routes = new Router()

routes.use(logRequest);

routes.get("/movies/upcoming", MovieController.upcoming)
routes.get("/movie/:id/credits", MovieController.credits)
routes.get("/movies/details/:id", MovieController.details)
routes.get("/movie/:id/reviews", MovieController.reviews)
routes.get("/discover/movie", MovieController.filter)

module.exports = routes
