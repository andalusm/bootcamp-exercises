class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
        this.children = []
    }

    giveBirth(name){
        this.children.push(name)
        console.log("Boom. Birthed " + name)
    }
}

const dog = new Animal("Olive", 4)
console.log(dog.name)

class Human {
    constructor(name, age, isFriendly) {
        this.name = name
        this.age = age
        this.isFriendly = isFriendly
    }
}

const Polly = new Human("Polly", 5, true)
console.log(`This is ${Polly.name}, they are ${Polly.age} years old, and are ${Polly.isFriendly ? 'friendly' : 'not friendly'}`) 

dog.giveBirth("Dolly")
console.log(dog.children) // should print an array with 1 item: ["Dolly"]


class Vehicle {
    constructor(x, y, speed,fuel) {
        this.x = x
        this.y = y
        this.speed = speed
        this._fuel  = fuel 
        Vehicle.carsSold ++
    }
    static getInfo(){
        console.log( "We've sold " + Vehicle.carsSold + " vehicles.")
    }
    static calculateMoney(){
        console.log(" Made " + Vehicle.carsSold * 30000 + " dollars.")
    }
    set fuel(val){
        if( val >= 0 && val<= 150){
            this._fuel = val
        }
    }
    get fuel(){
        return this._fuel
    }
}
Vehicle.carsSold = 0

car1 = new Vehicle(1,2,200,100)
Vehicle.calculateMoney()
car1.fuel = 260
console.log(car1.fuel)



