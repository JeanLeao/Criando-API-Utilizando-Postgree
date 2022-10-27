const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "@DAODA213412#",
    database: "mercado"
})

module.exports = client
