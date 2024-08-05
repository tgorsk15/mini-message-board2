const { Pool } = require("pg")
require('dotenv').config();

module.exports = new Pool({
    host: "localhost", // or wherever the db is hosted
    user: "tyler15",
    database: "top_users",
    password: "Kfkenny13!!",
    port: 5432 // the default port
})

console.log(Pool)