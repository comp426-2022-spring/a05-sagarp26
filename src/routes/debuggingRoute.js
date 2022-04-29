// Router for debugging
import express from 'express'
import { log, error} from '../middleware/debugMiddleware.js'
const debugRouter = express.Router()

debugRouter.get("/app/log/access", log)

debugRouter.get("/app/error", error);

modules.export = debugRouter