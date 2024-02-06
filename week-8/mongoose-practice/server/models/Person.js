const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/peopleDB", {
    useNewUrlParser: true,
}).catch((err) => console.log(err))
const Schema = mongoose.Schema
const personSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    address: {
        city: String,
        street: String,
        apartment: Number
    }
})

const Person = mongoose.model('person', personSchema)

module.exports = Person
// let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 }) //purposefully ignoring the `address` field
// console.log(p1)
// p1.save()

// Person.find({}).then(function (people) {
//     console.log(people)
// })

// Person.findById("65913e34105925deca5817f6").then( function (person) {
//     person.age += 10 //how time flies
//     person.save()
// })

// Person.findByIdAndUpdate("65913e34105925deca5817f6", { age: 70 }, { new: true }).then( function (person) {
//     console.log(person)
// })

// Person.findByIdAndDelete("65913e34105925deca5817f6").then( function (person) {
//     console.log(person)
// })


