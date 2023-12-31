const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/computerDB", {
    useNewUrlParser: true,
}).catch((err) => console.log(err))
const Schema = mongoose.Schema
const computerSchema = new Schema({
    maker: String,
    price: Number
})

const Computer = mongoose.model('computer', computerSchema)
// let c1 = new Computer({ maker: "Apple", price: 8000 }) 
// let c2 = new Computer({ maker: "HP", price: 3000 }) 
// let c3 = new Computer({ maker: "Asus", price: 5000 }) 
// const computers = [c1,c2,c3]
// computers.forEach((c)=>c.save())


Computer.find({}).then(function (err, computer) {
    console.log(computer)
})

