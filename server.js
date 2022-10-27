const client = require('./src/mercado/pg.js')
const express = require('express');
const app = express();

app.listen(3300, ()=>{
    console.log("Sever 3300");
})

client.connect();

app.get('/produto', (req, res)=>{
    client.query(`Select * from produto`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
