const changeColor = function (div) {
    div.style.backgroundColor = "#3498db"
}

const fetchBookData = function () {
    let input = $("#book-input").val()
    console.log(input)

    $.get(`books/${input}`, function (bookData) {
        console.log(input)
        $("body").append(`<div>${bookData.title} - ${bookData.author}`)
    })
}