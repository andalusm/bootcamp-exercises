
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
        users.push(newUser)
    }



    const deleteUser = function (username) { }

    const getAll = function () { }

    return {
        add: addUser,
        delete: deleteUser,
        getAll: getAll
    }
}

module.exports = {users:usersModule}