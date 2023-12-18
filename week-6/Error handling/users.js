
const errors = require('./errors')

const usersModule = function () {
    const users = [
        { username: "bonz", name: "Bony", country: "Nepal", age: 21 },
        { username: "marv", name: "Marvin", country: "Arizona", age: 33 },
        { username: "luc", name: "Lucil", country: "Singapore", age: 47 },
        { username: "marc", name: "Marco", country: "Greece", age: 63 },
        { username: "kev", name: "Kevin", country: "Italy", age: 31 }
    ]

    const addUser = function(newUser){
        const userName = newUser.username
        if (!userName.match(/^[a-z]+$/i)) {
            throw new errors.InvalidUsernameError() 
        }
        let doesExist = users.some(w => w.username === userName)
        if (doesExist) {
            throw new errors.DuplicatedResourceError()
        }
        if(!newUser.name || !newUser.username || !newUser.country || !newUser.age || typeof(newUser.age) != "number"){
            throw new errors.MissingDataError()
        }
        users.push(newUser)
    }

    const getUser = function(userName){
        let user = users.find(w => w.username === userName)
        if (user) {
            return user
        }
        else{
            throw new errors.NotUserError()
        }
        
        
    }



    const deleteUser = function (username) { 
        let userIndex = users.findIndex(user => user.username === username)

    if (userIndex === -1) {
        throw new errors.NotUserError()
        
    } else {
        users.splice(userIndex, 1)
        
    }

    }

    const getAll = function () { 
        return users;
    }

    return {
        add: addUser,
        delete: deleteUser,
        getAll: getAll,
        get : getUser
    }
}

module.exports = {usersModule}