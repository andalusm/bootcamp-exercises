const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const users = require('./users')
const usersModule = users.usersModule()
const errors = require('./errors')


app.get('/users', function (req, res) {
    res.send(usersModule.getAll())
})
app.get('/users/:username', function (req, res) {
    let username = req.params.username
    try {
            const user = usersModule.get(username)
            res.status(201).send(user)
        }
    catch(error){
        if(error instanceof errors.NotUserError){
            res.status(400).send({ "Error": `${username} is not a user` })
        }
    }
})

app.delete('/users/:username', function (req, res) {
    let username = req.params.username
    try {
            usersModule.delete(username)
            res.status(201).end()
        }
    catch(error){
        if(error instanceof errors.NotUserError){
            res.status(400).send({ "Error": `${username} is not a user` })
        }
    }
})

app.post('/users', function (req, res) {
    const newUser = req.body
    const username = newUser.username
    try {
        usersModule.add(newUser)
        res.status(201).end()
    }
    catch (error) {
        if (error instanceof errors.InvalidUsernameError) {
            res.status(400).send({ "Error": `${username} is not a valid name` })
        } else if (error instanceof errors.DuplicatedResourceError) {
            res.status(409).send({ "Error": `User ${username} already exist` })
        }else if (error instanceof errors.MissingDataError) {
            res.status(405).send({ "Error": `The data is incorrect types or missing` })
        }
    }
})



// app.post('/users', function (req, res) {
//     const newUser = req.body
//     if (/^[a-zA-Z]+$/.test(newUser.username)) {
//         let userIndex = users.findIndex(user => user.username === newUser.username)
//         if (userIndex === -1) {
//             users.push(newUser)
//             res.status(201).end()
//         }
//         else {
//             res.status(400).send({ "Error": `User ${newUser.username} already exists` })
//         }
//     }
//     else {
//         res.status(409).send({ "Error": `User ${newUser.username} is illegal, it should only include letters` })
//     }


// })


const port = 3000
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})