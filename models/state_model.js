'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
  asentamiento: String,
  tipo_asentamiento: String,
  municipio: String,
  estado: String,
  ciudad: String,
  cp: String,
  zona: String
})

module.exports = mongoose.model('estados', ProductSchema)
