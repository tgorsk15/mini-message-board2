const express = require('express');
const router = express.Router()

const messages = [
    {
        text: "Howdy do?",
        user: "Gandalf",
        added: new Date()
    },
    {
        text: "Where's Mr. Frodo?",
        user: "Samwise",
        added: new Date()
    },
    {
        text: "Top o the mornin",
        user: "Legolas",
        added: new Date()
    }
]

router.get("/", (req, res) => {
    console.log(messages)
    res.render('index', {messages: messages})
})

router.get('/new', (req, res) => {
    res.render('form')
})

router.post('/new', (req,res) => {
    
    console.log(req.body.name)
    console.log(req.body.message)
    res.send('message added')
})

module.exports = router