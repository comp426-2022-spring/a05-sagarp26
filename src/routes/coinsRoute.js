// Route (endpoint) definitions go in this directory
const express = require('express')
const coinsMiddleware = require('../middleware/coinMiddleware.js')

const coinsRoute = express.Router()

coinRouter.get('/app/', coinsMiddleware.check(req, res));

coinRouter.get('/app/flip/', coinsMiddleware.flips(req, res));

coinRouter.get('/app/flip/coin/', coinsMiddleware.flip(req, res));

coinRouter.get('/app/flips/:number', coinsMiddleware.flipsGet(req, res))

coinRouter.post('/app/flip/coins/', coinsMiddleware.flips(req, res));

coinRouter.get('/app/flip/call/:guess(heads|tails)/', coinsMiddleware.guessGet(req, res))

coinRouter.post('/app/flip/call/', coinsMiddleware.guess(req, res));

modules.export = coinsRoute