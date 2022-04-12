'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
  if (err) {
    return console.log(`Error connecting to the database: ${err}`)
  }
  console.log('Connection to the database, established...')

  app.listen(config.port, () => {
    console.log(`REST API is running, succesful connection`)
  })
})
