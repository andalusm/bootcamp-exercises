// Server setup
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./server/routes/api')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/peopleDB", {
    useNewUrlParser: true,
}).catch((err) => console.log(err))

app.use('/', api)

const port = 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})
