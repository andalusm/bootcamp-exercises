function countProperties(obj) {
    return Object.keys(obj).length
}
console.log(countProperties({ name: 'Alice', age: 25 })); // Should return 2


function hasNestedProperty(obj, key) {
    const keys = key.split(".")
    let c = obj
    for (const k of keys) {
        c = c[k]
        if(!c){
            return false
        }
        
    }
    return true
}
console.log(hasNestedProperty({ user: { name: 'Bob', age: 30 } }, 'user.name')); // Should return true


let person = {
    name: 'John',
    birthYear: 1990
};

function calculateAge(obj) {
    const d = new Date();
    let year = d.getFullYear();
    return year - obj.birthYear
}
console.log(calculateAge(person)); // Should return age

function updateProperty(obj, key, value) {
    obj[key] = value
    return obj
}
console.log(updateProperty({ name: 'Alice' }, 'name', 'Bob')); // Should change name to Bob

function createNestedObject(obj) {
    const keys = Object.keys(obj)
    const result = {}
    for (const k of keys) {
        const nestedKeys = k.split(".")
        let orign = result
        for (let index = 0; index < nestedKeys.length -1; index++) {
            const nestedKey = nestedKeys[index]
            if(!orign[nestedKey]){
                orign[nestedKey] = {}
            }
            orign = orign[nestedKey]
        }
        orign[nestedKeys[nestedKeys.length - 1]] = obj[k]
    }
    return result
}
// Test the function with
console.log(createNestedObject({ 'user.name': 'Alice', 'user.age': 25 })); // Should return { user: { name: 'Alice', age: 25 } }

function displayObjectInHTML(obj) {
    return `<h3> Welcome ${obj.name} </h3>`
}
// Test with an object of your choice

console.log(displayObjectInHTML({ name: 'Alice' }))


function hasProperty(obj, key) {
    if(obj[key])
        return true
    return false
}
// Test the function with
console.log(hasProperty({ name: 'Alice', age: 25 }, 'age')); // Should return true

let person1 = {
    name: 'John',
    greet: function() {
        return "Hello, "+ this.name + "!" 
    }
};
// Test the method with
console.log(person1.greet()); // Should return "Hello, John!"


function objectToArray(obj) {
    const keys = Object.keys(obj)
    const arr = []
    for (const k of keys) {
        arr.push([k, obj[k]])        
    }
    return arr
}
// Test the function with
console.log(objectToArray({ name: 'Alice', age: 25 })); // Should return [['name', 'Alice'], ['age', 25]]

function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
// Test the function with
console.log(mergeObjects({ name: 'Alice' }, { age: 25 })); // Should return { name: 'Alice', age: 25 }




