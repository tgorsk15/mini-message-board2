const { render } = require('ejs');
const express = require('express');
const router = express.Router()
const db = require("../db/queries");


router.get("/", async (req, res) => {
    const results = await db.getAllUsernames()
    console.log(results);
    res.render('index', {messages: results})
})

router.get('/new', (req, res) => {
    res.render('form')
})

router.get('/detail/:messageId', async (req, res) => {
    const messageId = req.params.messageId;
    console.log(messageId)
    const chosenMessage = await db.getUserInfo(messageId)
    console.log(chosenMessage)
    res.render('message', {message: chosenMessage})
})

router.post('/new', async (req,res) => {
    const content = req.body;
    await db.addMessage(content.message, content.user)
    res.redirect("/")
})

module.exports = router