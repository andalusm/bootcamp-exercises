//Exercise 1

const getBookInfo = function(isbn){
    const url = "https://www.googleapis.com/books/v1/volumes?q=isbn:"+isbn
    $.ajax({
        method: "GET",
        url:url,
        success: function (result) {
            console.log(isbn + "-"+ result.items[0].volumeInfo.title)
        }
    })

}

//Exercise 2

const getBook = function(queryType, queryValue){
    const url = "https://www.googleapis.com/books/v1/volumes?q="+queryType+":"+queryValue
    $.ajax({
        method: "GET",
        url:url,
        success: function (result) {
            console.log( result.items[0].volumeInfo.title )
        }
    })

}

//Exercise 3

const getBooks = function(queryType, queryValue){
    const url = "https://www.googleapis.com/books/v1/volumes?q="+queryType+":"+queryValue
    $.ajax({
        method: "GET",
        url:url,
        success: function (result) {
            for (const r of result.items) {
                console.log(r.volumeInfo.industryIdentifiers[0].identifier + "-"+ r.volumeInfo.title +" BY "+ r.volumeInfo.authors[0] )
            }
        }
    })

}