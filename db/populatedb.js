const { Client } = require("pg");
require('dotenv').config();


const SQL =`
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        text VARCHAR ( 255 ),
        "user" VARCHAR ( 255 ),
        added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    INSERT INTO messages (text, "user")
    VALUES
        ('Howdy do?', 'Gandalf'),
        ('Where''s Mr. Frodo?', 'Samwise'),
        ('Top o the mornin', 'Legolas');
`;

async function main() {
    console.log("seeding...")
    try {
        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false
            }
        });

        await client.connect();
        const result = await client.query(SQL);
        console.log(result)
        await client.end();
        console.log("done")
    } catch (error) {
        console.log(error)
    }
    
}

main()