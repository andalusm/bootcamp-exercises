//Exercise 1

const getBookInfo = function (isbn) {
    const url = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn
    $.ajax({
        method: "GET",
        url: url,
        success: function (result) {
            console.log(isbn + "-" + result.items[0].volumeInfo.title)
        }
    })

}

//Exercise 2

const getBook = function (queryType, queryValue) {
    const url = "https://www.googleapis.com/books/v1/volumes?q=" + queryType + ":" + queryValue
    $.ajax({
        method: "GET",
        url: url,
        success: function (result) {
            console.log(result.items[0].volumeInfo.title)
        }
    })

}

//Exercise 3

const getBooks = function (queryType, queryValue) {
    const url = "https://www.googleapis.com/books/v1/volumes?q=" + queryType + ":" + queryValue
    $.ajax({
        method: "GET",
        url: url,
        success: function (result) {
            for (const r of result.items) {
                console.log(r.volumeInfo.industryIdentifiers[0].identifier + "-" + r.volumeInfo.title + " BY " + r.volumeInfo.authors[0])
            }
        }
    })
}
// Exercise 4

const API_KEY = "eAWD0NLSSsbDIwfDx1Qv7eClJBfSXskS"
const searchGif = function () {
    const text = $("#search").val()
    $.get("http://api.giphy.com/v1/gifs/search?q=" + text + "&api_key=" + API_KEY + "&limit=1", function (data) { 
        const src = data.data[0].embed_url
        $('#result').attr('src',src);
    });
}


