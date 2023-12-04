

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