const { render } = require('ejs');
const express = require('express');
const router = express.Router()
const db = require("../db/queries");

// const messages = [
//     {
//         text: "Howdy do?",
//         user: "Gandalf",
//         added: new Date()
//     },
//     {
//         text: "Where's Mr. Frodo?",
//         user: "Samwise",
//         added: new Date()
//     },
//     {
//         text: "Top o the mornin",
//         user: "Legolas",
//         added: new Date()
//     }
// ]

router.get("/", async (req, res) => {
    const results = await db.getAllUsernames()
    console.log(results);
    res.render('index', {messages: results})
})

router.get('/new', (req, res) => {
    res.render('form')
})

router.get('/detail/:messageId', (req, res) => {
    const messageId = req.params.messageId;
    const message = messages[messageId];
    console.log(message)
    res.render('message', {message: message})
})

router.post('/new', async (req,res) => {
    const content = req.body;
    // messages.push({text: content.message, user: content.user, added: new Date()})
    await db.addMessage(content.message, content.user)
    res.redirect("/")
})

module.exports = router