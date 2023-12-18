const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


const usersModule = function(){

    const addUser = function(newUser){}

    const deleteUser = function(username){}

    const getAll = function(){}

    return {
        add: addUser,
        delete: deleteUser,
        getAll: getAll
    }
} 


const users = [
    { username: "bonz", name: "Bony", country: "Nepal", age: 21 },
    { username: "marv", name: "Marvin", country: "Arizona", age: 33 },
    { username: "luc", name: "Lucil", country: "Singapore", age: 47 },
    { username: "marc", name: "Marco", country: "Greece", age: 63 },
    { username: "kev", name: "Kevin", country: "Italy", age: 31 }
]
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
    if (/^[a-zA-Z]+$/.test(newUser.username)) {
        let userIndex = users.findIndex(user => user.username === newUser.username)
        if (userIndex === -1) {
            users.push(newUser)
            res.status(201).end()
        }
        else {
            res.status(400).send({ "Error": `User ${newUser.username} already exists` })
        }
    }
    else {
        res.status(409).send({ "Error": `User ${newUser.username} is illegal, it should only include letters` })
    }


})


const port = 3000
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})