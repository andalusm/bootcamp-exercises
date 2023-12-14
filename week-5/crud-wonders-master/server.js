const express = require('express')
const path = require('path')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


const wonders = [
    { name: "Mount Everest", location: "Nepal", visited: false },
    { name: "Grand Canyon", location: "Arizona", visited: false },
    { name: "Botanical Gardens", location: "Singapore", visited: true },
    { name: "Pantheon", location: "Greece", visited: false },
    { name: "Colosseum", location: "Italy", visited: true }
]

app.get('/wonders', function (req, res) {
    res.send(wonders)
})

app.post('/wonder', function (req, res) {
    console.log("Someone's trying to make a post request")
    wonders.push({ ...req.body, visited: false })
    res.send("Added wonder")
})
app.put('/wonder/:name', function (req, res) {
    let wonderName = (req.params.name).split("-")[0].trim()
    let wonderVisited = wonders.find(w=> w.name === wonderName)
    wonderVisited.visited = true 
    res.send("Updated wonder")
})

app.delete('/wonder/:name', function (req, res) {
    let wonderName = (req.params.name).split("-")[0].trim()
    let wonderIndex = wonders.findIndex(w=> w.name === wonderName)
    wonders.splice(wonderIndex, 1)
    res.send("Deleted a wonder")
})


const port = 1337 //because why not
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})