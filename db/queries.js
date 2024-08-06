const pool = require("./pool");

async function getAllUsernames() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows
}

async function addMessage(text, user) {
    await pool.query(`
        INSERT INTO messages (text, "user", added)
        VALUES
            ($1, $2, CURRENT_TIMESTAMP)
    `, [text, user])
}

async function getUserInfo(userId) {

}

module.exports = {
    getAllUsernames,
    addMessage,
    getUserInfo
}