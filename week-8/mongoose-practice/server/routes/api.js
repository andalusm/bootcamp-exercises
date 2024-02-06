const express = require('express')
const router = express.Router()

const Person = require('../models/Person')

router.get('/people', function (req, res) {
    Person.find({}).then( function (people) {
        res.send(people)
    })
})

router.post('/person', function (req, res) {
    const p = req.body
    const p1 = Person({firstName: p.firstName, lastName:p.lastName, age: p.age})
    p1.save()
    res.send(p1)
})
router.put('/person/:id', function (req, res) {
    const id = req.params.id
    Person.findByIdAndUpdate(id,{age:80},{new:true}).then((person)=>{
        res.send(`${person.firstName} ${person.lastName} age was updated to 80`)
    })
    
})
router.delete('/apocalypse', function(req,res){
    Person.deleteMany({}).then((people)=>{
        res.send("Everything was purged")
    })
})


module.exports = router
