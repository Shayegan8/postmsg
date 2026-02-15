import messages from "../modules/db.js";
export const index = (req, res) => {
    res.render("index", { data: messages });
};
export const newMessage = (req, res) => {
    res.render("new");
};
export const pushMessage = (req, res) => {
    const { text, user } = req.body;
    messages.push({
        text,
        user,
        added: new Date()
    });
    res.redirect("/");
};
//# sourceMappingURL=handlers.js.map