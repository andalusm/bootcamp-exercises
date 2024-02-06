import {Hobby} from './Hobby'
import {Person} from './Person'

const p1 = new Person('Shoobert', 29, 175, [], 70)


p1.grow()
console.log(p1.age) // should print 30

p1.loseWeight(10)
console.log(p1.weight) // should print 60

const h1 = new Hobby('Skating', 20)
console.log(h1.hobbyName) // should print 'Skating'
console.log(h1.yearsInHobby) // should print 20

p1.addHobby(h1)
p1.addHobby(new Hobby('Surfing', 3))

console.log(p1.hobbies)
/* should print
 [
   Hobby { hobbyName: 'Skating', years: 20 },
   Hobby { hobbyName: 'Surfing', years: 3 }
 ]
*/

console.log(p1.getHobbiesNames()) // should print [ 'Skating', 'Surfing' ]
