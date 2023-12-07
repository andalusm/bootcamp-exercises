const randomWord = $.get("https://random-word-api.herokuapp.com/word")
const API_KEY = "eAWD0NLSSsbDIwfDx1Qv7eClJBfSXskS"
randomWord.then((word)=>{
    console.log(word)
    let book = $.get("https://www.googleapis.com/books/v1/volumes?q=intitle:"+word)
    let gif = $.get("http://api.giphy.com/v1/gifs/search?q=" + word + "&api_key=" + API_KEY + "&limit=1")
    return Promise.all([book, gif])
})
.then((allPromises)=>{
    let [book, gif] = allPromises
    $('#book').text(book.items[0].volumeInfo.title);
    const src = gif.data[0].embed_url
        $('#gif').attr('src',src);
})