const express = require('express')


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


const wordCounter = { anna: 2 }


app.get('/sanity', function (req, res) {
    res.send("Server is up and running")
})

app.get('/word/:word', function (req, res) {
    const word = req.params.word
    if (!wordCounter[word])
        res.json({ count: 0 })
    else
        res.json({ count: wordCounter[word] })
})
app.get('/bestWord', function (req, res) {
    let bestWord = ""
    let max = 0
    Object.keys(wordCounter).forEach(function (key) {
        if (wordCounter[key] > max) {
            max = wordCounter[key]
            bestWord = key
        }
    });

    res.json({ text: bestWord, count: max })
})
app.get('/top5', function (req, res) {
    let top5 = Object.keys(wordCounter).sort((a, b) => wordCounter[b] - wordCounter[a]).slice(0, 5);
    const ranking = []
    for (let index = 0; index < top5.length; index++) {
        const ranked = {}
        ranked[top5[index]] = wordCounter[top5[index]]
        ranking.push(ranked)
    }
    res.json({ ranking: ranking })
})
app.get('/totalWords', function (req, res) {
    let sum = 0
    Object.keys(wordCounter).forEach(function (key) {
        sum += wordCounter[key]
    });

    res.json({ text: "Total count", count: sum })
})


app.post('/word', function (req, res) {
    const word = req.body.word
    if (wordCounter[word]) {
        wordCounter[word] += 1
    }
    else {
        wordCounter[word] = 1
    }
    res.json({ text: `Added ${word}`, currentCount: wordCounter[word] })
})

app.post('/sentence', function (req, res) {
    const sentence = req.body.sentence.toLowerCase().replace(/[^a-z ]/g, "")
    console.log(sentence)
    const words = sentence.split(" ")
    let numNewWords = 0
    let numOldWords = 0
    words.forEach(word => {
        if (wordCounter[word]) {
            wordCounter[word] += 1
            numOldWords += 1
        }
        else {
            wordCounter[word] = 1
            numNewWords += 1
        }

    });
    console.log(wordCounter)
    res.json({ text: `Added ${numNewWords} words, ${numOldWords} already existed`, currentCount: -1 })
})

app.delete('/word/:word', function (req, res) {
    let word = req.params.word
    if (wordCounter[word]) {
        delete wordCounter[word]
        res.json({ text: `${word} got deleted`, currentCount: -1 })
    }
    else {
        res.status(404).send("Item not found")

    }
})


const port = 202 //because why not
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})