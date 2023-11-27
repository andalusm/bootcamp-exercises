




//MORE FUNCTIONS
// people_info = [{
//         name: "guido",
//         profession: "bungalow builder",
//         age: 17,
//         country: "canaland",
//         city: "sydurn",
//         catchphrase: "what a piece of wood!"
//     },
//     {
//         name: "petra",
//         profession: "jet plane mechanic",
//         age: 31,
//         country: "greenmark",
//         city: "bostork",
//         catchphrase: "that's my engine, bub"
//     },
//     {
//         name: "damian",
//         profession: "nursery assistant",
//         age: 72,
//         country: "zimbia",
//         city: "bekyo",
//         catchphrase: "with great responsibility comes great power"
//     }
// ]

// const capitalize = function (str) {
//     let capitalizedStr = ""
//     capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
//     capitalizedStr += str.slice(1) //add the rest of str normallyreturn capitalizedStr
//     return capitalizedStr
// }
// const getAge = function (age) {
//     if (age < 21)
//         return "Underage"
//     else if (age > 55)
//         return "55+"
//     return age + " year old"
// }
// const getJob = function (job) {
//     const words = job.split(" ")

//     for (let i = 0; i < words.length; i++) {
//         words[i] = capitalize(words[i])
//     }

//     return words.join(" ")


// }

// const getSummary = function (person) {
//     let summary = ""
//     summary += capitalize(person.name)
//     summary += ` is ${getAge(person.age)}` //Yes - you can put a function call inside the tick quotes!
//     summary += ` ${getJob(person.profession)}` //call function for profession
//     summary += ` from  ${capitalize(person.city)}, ${capitalize(person.country)}.` //call function for country + city
//     summary += ` ${capitalize(person.name)} loves to say \"${capitalize(person.catchphrase)}\"`
//     return summary
// }
// console.log(getSummary(people_info[2]))


// const removeSpecialChars = function (word) {
//     word = word.toLowerCase()
//     for (let s of specialChars) {
//         word = word.split(s).join("")
//     }
//     return word
// }


// const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
// const specialChars = [",", ".", "'", '"', "?", "!", ";"]
// const wordCounts = {}
// let words = story.split(" ")
// for (let w of words) {
//     w1 = removeSpecialChars(w)
//     if (wordCounts[w1]) {
//         wordCounts[w1] += 1
//     } else {
//         wordCounts[w1] = 1
//     }
// }
// console.log(wordCounts)


//FUNCTIONS
// // const person = {
// //     name: "Julius",
// //     speak: function(food) {
// //       console.log("I like "+food)
// //     }
// //   }
// //   person.speak("cheese toast")

// /*
//   Write a function called isEven that accepts a number as a parameter and checks if the number is even or not.
//    Return true if it is even or false if it is odd. Don’t Google this one ;) Use modulo %
// */
// function isEven(num) {
//     return num % 2 == 0
// }
// /*
// Write a function that takes in an array of numbers.
// The function should loop through the numbers and (using the function from Exercise 1) print out the odd numbers.
//   */
// function printOdd(arr) {
//     for (let a of arr) {
//         if (!isEven(a)) {
//             console.log(a)
//         }
//     }
// }

// /*
// Write a JavaScript function that accepts two parameters: one being an array of integers,
// and the other being a number. The function should return true or false depending on whether the number exists in the array.
// */
// function doesExist(arr, num) {
//     for (let a of arr) {
//         if (a === num) {
//             return true
//         }
//     }
//     return false
// }

// /*
// Create an object called calculator.
// It should have two methods: add and subtract
// Both methods take two parameters, and should return the sum/difference of both numbers.
// Use this to test your code:
// */
// // const calculator = {
// //     add: function (x, y) {
// //         return x + y
// //     },
// //     subtract: function (x, y) {
// //         return x - y
// //     }
// // }
// // const result1 = calculator.add(20, 1)
// // const result2 = calculator.subtract(30, 9)

// // console.log(calculator.add(result1, result2)) //should print 42

function increaseByNameLength(money,name) {
    return money*name.length

}
function makeRegal(name) {
    return 'His Royal Highness, '+name

}


const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"




//SCOPE

// const isEnough = false

// const makeEnough = function () {
//     for (let i = 0; i < 10; i++) {
//         if (i > 5) {
//             isEnough = true
//         }
//     }
// }

// makeEnough()
// if (isEnough) {
//     console.log("Finally, sheesh")
// }
// else {
//     console.log("Here we go again...")
// }

// const doesUserExist = function (name) {
//     const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
//     for (let u of users) {
//         if (u.name == name) {
//             const found = true
//         }
//     }
//     return found
// }

// const userExists = doesUserExist("Lucius")
// if (userExists) {
//     console.log("We found the ragamuffin!")
// }
// else {
//     console.log("No idea where this person is.")
// }


// const pot = "red pot with earth in it"

// const getSeed = function () {
//     const seed = "brown seed"
// }

// const plant = function () {
//     getSeed()
//     console.log("Planting the " + seed + " inside a " + pot)
// }

// plant()



// const serveOrders = function (orders) {

//   for (let order of orders) {
//     let specialOrder = "special " + order
//     console.log("Served a " + specialOrder)
//   }

//   console.log("Finished serving all the orders: " + orders)
// }
// const allOrders = ["fish", "lettuce plate", "curious cheese"]
// serveOrders(allOrders)



// if (13 == "space") {
//   let cowSound = "moo"
// }
// else {
//   console.log("Cow says " + cowSound)
// }

// const run = true

// if (run) {
//     let distance = 8
//     for (var i = 0; i < distance; i++) {
//         console.log("running")
//     }
//     console.log("Finished running " + distance + " miles")
// }

// console.log("Damn, you see this gal? She ran " + distance + " miles") 



//LOOPS

// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []
// for (let i in names){
//     people.push({name:names[i], age:ages[i]})
//     console.log(names[i]+" is "+ages[i]+" years old")
// }

// const posts = [
//     {id: 1, text: "Love this product"},
//     {id: 2, text: "This is the worst. DON'T BUY!"},
//     {id: 3, text: "So glad I found this. Bought four already!"}
//   ]
//   let removeIndex
//   for(let i in posts){
//     if(posts[i].id === 2){
//         removeIndex = i
//     }
//   }
//   posts.splice(removeIndex,1)
//   console.log(posts)

//   const posts = [
//     {
//       id: 1, 
//       text: "Love this product",
//       comments: []
//     },
//     { 
//       id: 2, 
//       text: "This is the worst. DON'T BUY!", 
//       comments: [
//                   {id: 1, text: "Idiot has no idea"}, 
//                   {id: 2, text:"Fool!"}, 
//                   {id: 3, text: "I agree!"}
//                 ]
//      },
//      {
//       id: 3, 
//       text: "So glad I found this. Bought four already!",
//       comments: []
//      }
//   ]

//   let removeIndex,removecomment
//   for(let i in posts){
//     if(posts[i].id === 2){
//         removeIndex = i
//         for(let j in posts[i].comments){
//             if(posts[i].comments[j].id === 3)
//             {
//                 removecomment = j
//             }
//         }
//     }
//   }
//   posts[removeIndex].comments.splice(removecomment,1)
//   console.log(posts)

// const dictionary = {
//     "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
//     "B": ["Banana", "Bonkers", "Brain", "Bump"],
//     "C": ["Callous", "Chain", "Coil", "Czech"]
//   }

//   for(let e of Object.keys(dictionary))
//   {
//     console.log("Words that begin with  "+e+":")
//     for(let e1 of dictionary[e])
//     {
//         console.log(e1)
//     }

//   }







//OBJECTS

/*
Create two ‘people’ objects, p1 and p2. Each should have the following properties:

    name
    age
    city

Write some code with the following logic:

    If the people are the same age
    If the people live in the same city
    Print “Jill wanted to date Robert”
    If they’re not in the same city
    Print “Jill wanted to date Robert, but couldn’t”

*/
// let p1 = {name:"Jill",age:20,city:"NYC"}
// let p2 = {name:"Robert", age:20, city:"NYC"}

// if (p1.age === p2.age)
// {
//     if(p1.city === p2.city)
//     {
//         console.log(p1.name+" wanted to date "+p2.name)
//     }
//     else{
//         console.log(p1.name+" wanted to date "+p2.name+", but couldn\'t")
//     }
// }

/*
    Create an object called library that has a books key
    The value of books should be an array of book objects
    Each book should have a title and author key

*/
// let book1 = {title:"And Then There Were None", author:"Agatha Christie"}
// let book2 = {title:"Hamlet", author:"William Shakespeare"}

// let library = {books:[book1,book2]}



// const reservations = {
//     bob: { claimed: false },
//     ted: { claimed: true }
//   }

//   let name = prompt('Please enter the name for your reservation');
//   name = name.toLowerCase()
//   if (reservations[name] && !reservations[name].claimed)
//   {
//     reservations[name].claimed = true
//     console.log("Welcome,"+name)
//   }
//   else if(reservations[name]){
//     console.log("Hmm, someone already claimed this reservation")
//   }
//   else{
//     console.log("You have no reservation")
//     reservations[name]= {claimed:true}
//     console.log("But now you do")
//   }

// const date = 3

// const kitchen = {
//     owner: "Geraldine",
//     hasOven: true, // choose one
//     fridge: {
//         price: 500,
//         works: false, // choose one
//         items: [
//             { name: "cheese", expiryDate: 7 },
//             { name: "raddish", expiryDate: 2 },
//             { name: "bread", expiryDate: 1 }
//         ]
//     }
// }

// const hasOven = kitchen.hasOven
// const fridgeWorks = kitchen.fridge.works
// let raddish = kitchen.fridge.items[1]
// let expire = date-raddish.expiryDate
// if(hasOven){
//     if(fridgeWorks){
//         console.log(kitchen.owner+"\'s "+raddish.name+" expired "+expire+" day ago. Weird, considering your fridge works. Luckily, you have an oven to cook the "+raddish.name+" in.")
//     }
//     else{
//         console.log(kitchen.owner+"\'s "+raddish.name+" expired "+expire+" day ago. Probably because her fridge doesn\'t work. Luckily, you have an oven to cook the "+raddish.name+" in. And you will have to pay "+kitchen.fridge.price/2+" to fix the fridge.")
//     }

// }
// else{
//     if(fridgeWorks){
//         console.log(kitchen.owner+"\'s "+raddish.name+" expired "+ expire+" day ago. Weird, considering your fridge works. Too bad you don\'t have an oven to cook the "+raddish.name+" in.")
//     }
//     else{
//         console.log(kitchen.owner+"\'s "+raddish.name+" expired "+ (expire)+" day ago. Probably because her fridge doesn\'t work. Too bad you don\'t have an oven to cook the "+raddish.name+" in. And you will have to pay "+kitchen.fridge.price/2+" to fix the fridge.")
//     }

// }
//...//this will be cleaner than doing: //if(kitchen.hasOven){...








//ARRAYS
/*
Now follow these instructions:

    delete the second and third elements
    change the fourth element to 1
    delete the last 4 elements
    add another element 0 to the beginning of the array
    print the modified array

*/
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// numbers.splice(1,2)
// numbers[3] = 1
// numbers.splice(numbers.length-4,4)
// numbers.splice(0,0,0)
// console.log(numbers)



// CONDITIONS
// let boughtTesla = false
// const yearOfTeslaPurchase = 2016
// let isUSCitizen = true
// let currentYear = 2018
// const YEARS_TO_UPGRADE =4
// if(boughtTesla && isUSCitizen && currentYear-yearOfTeslaPurchase>=YEARS_TO_UPGRADE)
// {
//     console.log("Would you like an upgrade??")
// }
// else if(boughtTesla && isUSCitizen)
// {
//     console.log("Are you satisfied with the car??")
// }
// else if(boughtTesla)
// {
//     console.log("Do you want to move to th US??")
// }
// else
// {
//     console.log("Are you intrested in buying a car??")
// }