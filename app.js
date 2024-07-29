const express = require('express');

const app = express()

app.get("/", (req, res) => {
    res.send('Wowza!!')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Howdy partner, your server is up and running'))
