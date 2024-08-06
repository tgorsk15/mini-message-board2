const pool = require("./pool");

async function getAllUsernames() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows
}

module.exports = {
    getAllUsernames,
}