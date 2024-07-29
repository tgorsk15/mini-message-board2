const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index.js');

const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use("/", indexRouter)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Howdy partner, your server is up and running'))
