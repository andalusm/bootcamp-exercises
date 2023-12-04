$.get("https://www.googleapis.com/books/v1/volumes?q=title:Name of the Wind", function (result) {
    console.log(result.items[0].volumeInfo.description)
})

$.get("https://jsonplaceholder.typicode.com/users", function (users) {
    //extract the geo data of the first user

    let lat = users[0].address.geo.lat
    let long = users[0].address.geo.lng
    let catchPhrase = users[users.length-1].company.catchPhrase

    //log the data
    console.log(`${lat}, ${long}`) //prints -37.3159, 81.1496
    console.log(catchPhrase)
})