

import express from "express"
import ServiceController from "../controller/serviceController.js"
import { VerifyAccess } from "../midleware/virifyAccess.js"
const router = express.Router()
router.post("/", VerifyAccess("provider"),ServiceController.createdService)
export default router