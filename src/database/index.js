const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

// const Logs = require('../models/logs')
// const models = [Logs]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(dbConfig)

    // models.map(model => model.init(this.connection))
  }
}


module.exports = new Database()