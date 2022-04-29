// Route (endpoint) definitions go in this directory
// imports coin middleware
import { check, flip, flipsGet, flips, guessGet, guess } from '../middleware/coinMiddleware.js'

// Imports express and creates router object
import express from 'express'
const coinRouter = express.Router()

// Check /app/ endpoint
coinRouter.get('/app/', check);

// Flip 1 coin endpoint
coinRouter.get('/app/flip/', flip);

// Flip 1 coin endpoint
coinRouter.get('/app/flip/coin/', flip);

// Flip many coins GET endpoint
coinRouter.get('/app/flips/:number', flipsGet)

// Flip many coins POST endpoint
coinRouter.post('/app/flip/coins/', flips);

// Guess flip GET endpoint
coinRouter.get('/app/flip/call/:guess(heads|tails)/', guessGet)

// Guess flip POST endpoint
coinRouter.post('/app/flip/call/', guess);

export default coinRouter