import categoryRouter from "./categoryRouter.js"
import userRouter from"./userRouter.js"
import express from "express"
import serviceRouter from "./serviceRouter.js"

const router = express.Router()
router .use("/user",userRouter)
router.use("/category",categoryRouter)
router.use("/service",serviceRouter)
export default router