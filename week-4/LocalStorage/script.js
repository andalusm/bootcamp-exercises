let userStorage = {
    darkMode: true,
    showSideNav: false,
    defaultResultCount: 9,
    latestMarks: {
        sectionA: 92,
        sectionB: 11
    },
    cart: [
        { id: 3112, count: 2 },
        { id: 812, count: 16 }
    ]
}

localStorage.userStorage = JSON.stringify(userStorage)
console.log(JSON.parse(localStorage.userStorage).cart[1].count)