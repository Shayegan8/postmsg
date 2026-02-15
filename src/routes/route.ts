import {Router} from "express"
import {index, newMessage} from "../controllers/handlers.js"

const router = Router()

router.get("/", index)
router.get("/new", newMessage)

export default router