import messages from "../modules/db.js"

export const index = (req: any, res: any) => {
    res.render("index", {data: messages})
}

export const newMessage = (req: any, res: any) => {
    res.render("new")
}