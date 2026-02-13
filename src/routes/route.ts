import {Router} from "express"
import {index} from "../controllers/handlers.js"

const router = Router()

router.get("/", index)

export default router