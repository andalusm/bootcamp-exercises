const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))

const data = {
    8112: {
        title: "Name of the Wind",
        author: "Patrick Rothfuss"
    },
    9121: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger"
    },
    1081: {
        title: "The Giver",
        author: "Lois Lowry"
    }
}

app.get('/', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    response.send("Ending the cycle, thanks for visiting")
})

app.get('/books/:booksID', function (request, response) {

    response.send(data[request.params.booksID])
})




// app.get('/maps', function (request, response) {
//     response.send("Here's some stuff related to maps")
// })

// app.get('/shoobi', function (request, response) {
//     response.send("This here is the shoobi *route*")
// })

// app.get('/life', function (request, response) {
//     response.send('42')
// })

// const users = {
//     tilda: "You've done a wonderful job",
//     riva: "You need to improve your form, but good perseverance",
//     jeremy: "You're incredible"
// }
// app.get('/landing/:username', function (request, response) {
//     response.send(`Hi there, ${request.params.username}`)
// })

// app.get('/users/:username', function (request, response) {
//     response.send(users[request.params.username.toLowerCase()])
// })
// app.get('/routeWithOptionalParameters', (request, response) => {
//     let params = request.query
//     response.send(params)
// })
// app.get('/details', (request, response) => {
//     let params = request.query
//     console.log(params.city)
//     response.send(params)
// })
//start server
const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)

})
