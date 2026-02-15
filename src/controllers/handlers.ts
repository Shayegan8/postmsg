import messages from "../modules/db.js"

export const index = (req: any, res: any) => {
    res.render("index", {data: messages})
}

export const newMessage = (req: any, res: any) => {
    res.render("new")
}

export const pushMessage = (req: any, res: any) => {
    const {text, user} = req.body
    messages.push({
        text,
        user,
        added: new Date()
    })
    res.redirect("/")
}