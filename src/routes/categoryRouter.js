
import expresss from "express"
import CategoryController from "../controller/categoryController.js"
const router = expresss.Router()
router.post("/create",CategoryController.createCategory)

export default router