const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.listen(process.env.port, () => {
  console.log(`Example app listening at http://localhost:${process.env.port}`)
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected!!')
});

const person=require('../models/User')

app.get("/user", (req, res) => {
    console.log(req.params);
})
app.post("/user", (req, res) => {
    console.log(req.params);
    
})
app.put("/user/12", (req, res) => {
    console.log(req.params);
})
app.delete("/user/12", (req, res) => {
    console.log(req.params);
})