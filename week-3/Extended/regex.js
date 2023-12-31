// Exercise 1

// const str = "the fat cat hit the rat with a bat"
// const str1 = "bob yelled hello"
// const str2 = "it's fleece was white as snow";
// const str3 = "0542212222";
// const str4 = "054hihihii";
// const str5 = "9542212222";

// //Checks if it contains “a” in the string
// const checkIfContainsA = function (str) {
//     /**
//      * should return true if string contains a
//      */
//     const pattern = /a/i
//     const result = str.match(pattern)
//     return !(result === null)
// }

// //Checks if it’s a string that ends with “at”
// const checkIfEndsWithAt = function (str) {
//     /**
//      * should return true if a string ending with at exsists in string
//      * HINT : look into $
//      */
//     const pattern = /at$/i
//     const result = str.match(pattern)
//     return !(result === null)
// }
// //Checks if it’s a number that starts with 054 and of size 10.
// const checkIfStartsWithNum = function (str) {
//     /**
//      * should return true if string is all numbers / size 10 / starts with 054
//      * HINT : look into ^ , into Ranges [] and sizes {}
//      */
//     const pattern = /^054\d{7}/
//     const result = str.match(pattern)
//     return !(result === null)

// }

// console.log(checkIfContainsA(str)) //returns true
// console.log(checkIfContainsA(str1)) //returns false

// console.log(checkIfEndsWithAt(str)) //returns true
// console.log(checkIfEndsWithAt(str1)) //returns false
// console.log(checkIfEndsWithAt(str2)) //returns false

// console.log(checkIfStartsWithNum(str)) //returns false
// console.log(checkIfStartsWithNum(str3)) //return true
// console.log(checkIfStartsWithNum(str4)) //return false
// console.log(checkIfStartsWithNum(str5)) //return false



// Exercise 2

// let regexArr = [/a/, /b/, /^d/, /e$/]
// const str = "Bike"
// const str1 = "the room is on fire"
// const str2 = "Fergalicious"
// const str3 = "Fox in sheep clothing"
// const searchMatchingRegex = function (str) {
//     /**
//      * should return true if one match is found with the array
//      */
//     for (const reg of regexArr) {
//         const result = str.match(reg)
//         if (!(result === null)) {
//             return true
//         }

//     }
//     return false
// }

// console.log(searchMatchingRegex(str)) //return true (contains b)
// console.log(searchMatchingRegex(str1)) //return true (ends with e)
// console.log(searchMatchingRegex(str2)) //return true (contains a)
// console.log(searchMatchingRegex(str3)) //return false

// regexArr = [/at/, /a/, /a$/, /^b/]

// console.log(searchMatchingRegex('cat')) //will return true
// console.log(searchMatchingRegex('bike')) //will return true
// console.log(searchMatchingRegex('mouse')) //will return false 

//Exercise 3


const email1 = "cat@meow.com"
const email2 = "bad1npuT!@gmail.com"
const email3 = "meow@gmail.net"

const emailValidator = function (str) {
    /**
     * returns true if email prefix and domain is made strictly out of letters , the email must end in .com
     * HINT : doesnt have to be a big regex expression use the methods from RegExp
     */
    const pattern = /^\w+@\w+\.com$/
    const result = pattern.test(str)
    return result


}

console.log(emailValidator(email1)) //return true
console.log(emailValidator(email2)) //return true
console.log(emailValidator(email3)) //return false

// Exercise 4

const firstURL = "www.workingurl.com"
const secondURL = "iamabadurl.com"
const thirdURL = "www.doireallywork.net"

const urlValidator = function (str) {
    /**
     * returns true if URL starts with www. , the URL must end in .com
     * HINT : doesnt have to be a big regex expression use the methods from RegExp
     */
    const pattern = /^www\.\w+\.com$/
    const result = pattern.test(str)
    return result
}

console.log(urlValidator(firstURL)) //return true
console.log(urlValidator(secondURL)) //return false
console.log(urlValidator(thirdURL)) //return false

