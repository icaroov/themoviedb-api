const { Router } = require('express')
const cors = require('cors')

// CONTROLLERS
const MovieController = require('./controllers/MovieController')

// MIDDLEWARES
const logRequest = require('./middlewares/logRequest')
const checkAuth = require('./middlewares/auth')

const routes = new Router()

routes.use(cors());
routes.use(logRequest);

// ROUTES
routes.post("/authenticate", MovieController.authenticate)

routes.use(checkAuth);

routes.get("/movies/upcoming", MovieController.upcoming)
routes.get("/movie/:id/credits", MovieController.credits)
routes.get("/movies/details/:id", MovieController.details)
routes.get("/movie/:id/reviews", MovieController.reviews)
routes.get("/discover/movie", MovieController.filter)

module.exports = routes
