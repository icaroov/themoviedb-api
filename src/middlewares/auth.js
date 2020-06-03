const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  // token format = Authorization: Bearer <acess_token>

  const bearerHeader = req.headers['authorization']

  // check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    
    // split at the space
    const bearer = bearerHeader.split(' ')
    // get token from array
    const bearerToken = bearer[1]
    // set the token
    req.token = bearerToken

    next()

  } else {
    // Forbidden
    res.sendStatus(403)
  }
}