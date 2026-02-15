import express from "express"
import Config from "./config.js"
import path from "node:path"
import router from "./routes/route.js"

const app = express()

const dirname = import.meta.dirname

app.set("views", path.join(dirname, "../src/views"))
app.use(express.static(path.join(dirname, "../src/views")))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.use(router)

const server = app.listen(Config.port || 3000, () => {
    console.log(`Server is running on port ${Config.port || 3000}`)
})

export default server