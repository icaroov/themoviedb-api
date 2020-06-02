module.exports = (req, res, next) => {
  console.log('✨ I got a request!')
  const { method, url } = req;

  const logLabel = `[${method.toUpperCase()}] ${url}`

  console.log(logLabel)

  return next()
}