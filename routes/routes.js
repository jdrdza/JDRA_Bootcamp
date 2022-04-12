'use strict'

const express = require('express')
const methods = require('../controllers/methods')
const api = express.Router()


api.get('/getCP/:cp', methods.getCP)
api.get('/getStates', methods.getStates)
api.get('/getHello/:name', methods.getHello)
api.get('/getHello', methods.getHello)

module.exports = api
