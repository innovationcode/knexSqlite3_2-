const express = require('express');
const server = express();

server.use(express.json());

const port = 7000;
const db = require('./db.js')

// server.get('/', (req, res) => {
//     res.json("API  RUNNING...............");
// })

server.get('/flower', (req, res) => {
    db('flower')
       .then(flower => {
            console.log(flower)
            res.status(200).json(flower);
        })
       .catch(err => {
            res.status(404).json(err);
        })
})

//port listening..
server.listen(port, () => {
    console.log(`Server running on ${port}`);
})