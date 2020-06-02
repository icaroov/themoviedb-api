const express = require('express')

module.export = (req, res, next) => {
  const { method, url } = req;

  const logLabel = `[${method.toUpperCase()}] ${url}`

  console.time(logLabel)

  next()

  console.timeEnd(logLabel)
}