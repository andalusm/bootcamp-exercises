const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))


const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.get('/', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    response.send("Ending the cycle, thanks for visiting")
})

app.get('/priceCheck/:name', function (request, response) {
    const productName = request.params.name
    const product = store.find(prod=> prod.name === productName)
    if(product){
        response.send({price:product.price})
    }
    else{
        response.send({price:null})
    }
    
})


app.get('/buy/:name', function (request, response) {
    const productName = request.params.name
    const product = store.find(prod=> prod.name === productName)
    if(product.inventory > 0){
        product.inventory -= 1
    }
    if(product){
        response.send(product)
    }
    else{
        response.send({})
    }
    
})
app.get('/sale', function (request, response) {
    const admin = request.query.admin
    if(admin === 'true'){
        store.forEach(prod=> {
            if(prod.inventory > 10){
                prod.price = prod.price * 0.5
            }
        })
        response.send(store)

    }
    else{
        response.send(store)
    }
    
})
app.get('/priceCheck', function(request,response){
    const money = request.query.money
    const forniture = request.query.forniture
    const product = store.find(prod=> prod.name === forniture)
    if(money >= product.price){
        response.send({buy:true})
    }else{
        response.send({buy:false})
    }

})
const port = 3000
app.listen(port, function () {
    console.log("Server is up and running smoothly")

})