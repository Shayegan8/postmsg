import dotenv from "dotenv"

dotenv.config()

interface Config {
    [port: string] : number
}

const Config: Config = {
    port: parseInt(process.env.PORT! as string)
}

export default Config