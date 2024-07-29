const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index.js');
const newMessageRouter = require('./routes/new.js');
const detailRouter = require('./routes/detail.js');

const app = express()
const assetsPath = path.join(__dirname, "styles")
app.use(express.static(assetsPath))

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true}));

app.use("/", indexRouter)
app.use("/new", newMessageRouter)
app.use("/detail", detailRouter)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Howdy partner, your server is up and running'))
