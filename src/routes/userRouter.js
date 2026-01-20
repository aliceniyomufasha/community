import express from "express"
import controller from "../controller/userController.js"
import { EmailExist } from "../midleware/validation.js"
import { VerifyAccess } from "../midleware/virifyAccess.js"
const router = express.Router()
router.post("/",EmailExist,controller.signup)
router.post("/login",controller.login)
router.get("/users/",VerifyAccess("client"),controller.getAllUsers)
router.delete("/users/",controller.deleteAllUser)
router.delete("/id",controller.getOneUser)
router.patch("/id",controller. updateUser)
export default router