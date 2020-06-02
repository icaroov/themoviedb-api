const { Router } = require('express')

import MovieController from './controllers/MovieController'

const routes = new Router()

routes.get("/movies/upcoming", MovieController.upcoming)
routes.get("/movies/genres", MovieController.genres)
routes.get("/movies/search", MovieController.search)
routes.get("/movies/details/:id", MovieController.details)

routes.post("/movie/:id/rating", MovieController.rating)

export default routes
