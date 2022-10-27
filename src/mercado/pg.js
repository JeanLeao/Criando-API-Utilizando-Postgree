const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "334499mil",
    database: "mercado"
})

module.exports = client