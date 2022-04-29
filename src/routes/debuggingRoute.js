// Router for debugging
const express = require('express')
const debuggingMiddleware = require('../middleware/debugMiddleware.js')

const debuggingRoute = express.Router()

debugRouter.get("/app/log/access", debuggingMiddleware.log(req, res))

debugRouter.get("/app/error", debuggingMiddleware.error(req, res));

modules.export = debuggingRoute