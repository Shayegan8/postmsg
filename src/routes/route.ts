import {Router} from "express"
import {index, newMessage, pushMessage} from "../controllers/handlers.js"

const router = Router()

router.get("/", index)
router.get("/new", newMessage)
router.post("/new", pushMessage)

export default router