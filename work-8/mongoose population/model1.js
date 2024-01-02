const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/solarDB", {
    useNewUrlParser: true,
}).catch((err) => console.log(err))

const Schema = mongoose.Schema

const planetSchema = new Schema({
    name: String,
    system: { type: Schema.Types.ObjectId, ref: 'Solar' },
    visitors: [{ type: Schema.Types.ObjectId, ref: 'Visitor' }] //reference to an array of Review documents
})

const visitorSchema = new Schema({
    name: String,
    homePlanet: { type: Schema.Types.ObjectId, ref: 'Planet' }, //reference to a Book document
    visitedPlanets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }] //reference to a Critic document
})

const solarSchema = new Schema({
    starName: String,
    planets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }], //reference to an array of Review documents
})


const Solar = mongoose.model("Solar", solarSchema)
const Planet = mongoose.model("Planet", planetSchema)
const Visitor = mongoose.model("Visitor", visitorSchema)
const generate = function () {
    let s1 = new Solar({
        starName: "The solar system",
        planets: []
    })

    let p1 = new Planet({
        name: "Venus",
        system: s1,
        visitors: []
    })

    let p2 = new Planet({
        name: "Neptune",
        system: s1,
        visitors: []
    })
    let p3 = new Planet({
        name: "Mars",
        system: s1,
        visitors: []
    })

    let v1 = new Visitor({
        name: "Andalus",
        homePlanet: p2,
        visitedPlanets: [p1, p3]
    })
    let v2 = new Visitor({
        name: "Braa",
        homePlanet: p1,
        visitedPlanets: [p1]
    })
    let v3 = new Visitor({
        name: "Braa",
        homePlanet: p3,
        visitedPlanets: [p2, p1]
    })
    p2.visitors.push(v3)
    p1.visitors = [v1, v2, v3]
    p3.visitors.push(v1)
    s1.planets = [p1, p2, p3]

    s1.save()
    p1.save()
    p2.save()
    p3.save()
    v1.save()
    v2.save()
    v3.save()
}

// generate()

// Visitor.findOne({name:"Andalus"})
//     .populate('visitedPlanets')
//     .then(function (visitor) {
//         console.log(visitor.visitedPlanets)
//     })

// Planet.findOne({})
//     .populate('visitors')
//     .then(function (planet) {
//         console.log(planet.visitors)
//     })

Solar.findOne({})
    .populate({
        path: 'planets',
        populate: {
            path: 'visitors'
        }
    })
    .then(function (solar) {
        for (const p of solar.planets) {
            for (const v of p.visitors) {
                console.log(v)

                
            }
            
        }
        
    })



// let c1 = new Critic({
//     name: "William Jeffery",
//     reviews: []
// })

// let r1 = new Review({
//     book: b1,
//     critic: c1,
//     reviewText: "Excellent Book"
// })

// b1.reviews.push(r1)
// c1.reviews.push(r1)

// b1.save()
// c1.save()
// r1.save()

// Book.find({}).then(function(books){
//     console.log(books)
// })
// Review.find({}).then(function(books){
//     console.log(books)
// })
// Book.find({})
//     .populate("reviews")
//     .then(function (book) {
//         for (const b of book) {
//             console.log(b.reviews)
//         }
//     })

// Review.find({})
//     .populate('book critic')
//     .then(function (reviews) {
//         console.log(reviews)
//     })

