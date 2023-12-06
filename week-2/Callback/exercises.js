// Exercise 1
// Write a function pushPull that takes one argument - a function - and invokes that function:

// const push = function () {
//     console.log("pushing it!")
//   }
  
//   const pull = function () {
//     console.log("pulling it!")
//   }
//   const pushPull= function(callback){
//     callback();
//   }
//   pushPull(push) //should print "pushing it!"
//   pushPull(pull) //should print "pulling it!"



// Exercise 2
// Create a function called getTime that takes one parameter - a function - then calls it with an argument.

// const returnTime = function (time) {
//     console.log('The current time is: ' + time)
// }
// const getTime = function(callback){
//     const time = new Date();
//     callback(time)
// }
  
// getTime(returnTime)



// Exercise 3
// Given the following code, what error do you get? Write the missing part to make the code work:

// const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
//   };
//   const logData = console.log
//   displayData(alert, logData, "I like to party")



// Exercise 4
// Create an arrow function that receives three parameters and returns their sum - it should be one line.

// const sumThree = (num1,num2,num3) => num1+num2+num3
// console.log(sumThree(9,7,8))



// Exercise 5
// Create an arrow function called capitalize that receives any string, and returns it with proper capitalization:

// const capitalize = str => console.log(str[0].toUpperCase()+str.substring(1).toLowerCase())
// capitalize("bOb") // returns Bob
// capitalize("TAYLOR") // returns Taylor
// capitalize("feliSHIA") // returns Felishia

// Exercise 6
// Create a one-line arrow function called commentOnWeather that takes one parameter, temp. It should call determineWeather and return the concatenation of "It’s " and determineWeather’s output:
const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
}
const commentOnWeather= temp => console.log("It\'s "+ determineWeather(temp))

commentOnWeather(30) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"


// Exercise 7
// const explode = (lightFunc, soundFunc, sound) => {
//     lightFunc()
//     soundFunc(sound)
//   }
      
//   const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
//   const makeSound = sound => alert(sound)
      
//   explode(shineLight, makeSound, "BOOM")
// count = 0
// this.count = 99

// let x = {
//     count: 12,
//     go: () =>{
//         setTimeout(() => {
//             console.log(this.count)
//         }, 1500)
//     }
// }
// x.go()



// setInterval(()=>{console.log("hi")}, 2000)

// const run = (name) => {console.log("Run, " + name + ", run!")}
// const yell = function(action){
//     let env = "Forest"
//     action(env)
// }
// run(yell)



  