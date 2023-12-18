const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
let { users } = require('./users')
users = users()
const errors = require('./errors')


app.get('/users', function (req, res) {
    res.send(users)
})

app.delete('/users/:username', function (req, res) {
    let username = req.params.username
    let userIndex = users.findIndex(user => user.username === username)

    if (userIndex === -1) {
        res.status(404).send({ "Error": `User ${username} does not exist` })
    } else {
        users.splice(userIndex, 1)
        res.status(204).end()
    }
})

app.post('/users', function (req, res) {
    const newUser = req.body
    const username = newUser.username
    try {
        users.add(newUser)
        res.status(201).end()
    } catch (error) {
        if (error instanceof errors.InvalidUsernameError) {
            res.status(400).send({ "Error": `${username} is not a valid name` })
        } else if (error instanceof errors.DuplicatedResourceError) {
            res.status(409).send({ "Error": `User ${username} already exist` })
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