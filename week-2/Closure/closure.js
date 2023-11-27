const foo = function () {
    const x = 1
  
    const bar = function () {
      console.log(x) //notice this inner function using the outer function's variable
    }
  
    return bar
  }
  
  const baz = foo() //out here, x doesn't exist
  baz() //but when we invoke baz, we're printing x!

  const setCounter = function (num) {
    let counter = 0
  
    const count = function () {
      counter += num;
      console.log(counter)
    }
  
    return count
  }
  
  const increment = setCounter(2)
  increment()

//   Spot Check 1

const spot1= function(){
    familyArr=[]
    const birth = function(name){
        familyArr.push(name);
        console.log(familyArr);

    }
    return birth;
}

const birthFun = spot1();
birthFun("Lolo")
birthFun("Toto");

// Spot check 2
const mathOperations = function () {
    const add = function (x, y) {
        return x + y;
    }

    const subtract = function (x, y) {
        return x - y;
    }

    const multiply = function (x, y) {
        return x * y;
    }

    const divide = function (x, y) {
        return x / y;
    }
    return {
        add: add,
        sub: subtract,
        mult: multiply,
        div: divide
    }
}

const m = mathOperations()
console.log(m.add(13,29))
console.log(m.mult(1.75,24))
console.log(m.mult(7, m.sub(36, 6)))

//Modularization

const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.listUsers()
usersModule.addUser('Andalus')
usersModule.addUser('Braa')
usersModule.listUsers()

// Exercise 1------------------------

const StringFormatter  = function () {
    

    const capitalizeFirst = function (str) {
        return str[0].toUpperCase()+str.substring(1).toLowerCase();
    }

    const toSkewerCase = function (str) {
        return str.replace(" ","-")
    }

    return {
        capitalizeFirst: capitalizeFirst,
        toSkewerCase: toSkewerCase
    }
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should return Dorothy
console.log(formatter.toSkewerCase("blue box")) //should return blue-box

// Exercise 2
const Bank  = function () {
    let _money = 500;
    

    const depositCash  = function (money) {
        _money += money
    }

    const checkBalance  = function () {
        console.log(_money)
    }

    return {
        deposit: depositCash ,
        showBalance: checkBalance 
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950

// Exercise 3
const SongsManager  = function () {
    let _songs  = {};
    

    const addSong  = function (song,link) {
        _songs[song] = link.replace("https://www.youtube.com/watch?v=","")
    }

    const getSong  = function (song) {
        if(_songs[song])
        {
            console.log("https://www.youtube.com/watch?v="+_songs[song])
        }
        
    }

    return {
        addSong: addSong ,
        getSong: getSong 
    }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ

// Check 
let _memories = ["that time at band camp", "yesterday's breakfast"]
    
const Brain = function(){
    const dayDream = () => _memories
    const experience = memory => _memories.push(memory)
    const forget = memory => _memories.splice(_memories.indexOf(memory), 1)
    const spazz = () => console.log("bleurg")

    return{
        reminisce: dayDream,
        live: experience,
        blank: forget,
        freakOut: spazz
    }
}

const brain = Brain()
brain.freakOut()



