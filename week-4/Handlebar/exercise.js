var items = [
    { item: "cheese", price: 15 },
    { item: "arak", price: 68 },
    { item: "hummus", price: 15 },
    { item: "pita", price: 5 }
]

// Write a for loop here that loops through
// the items array, creates a template for each
// item, and appends it to the items div.
const source = $("#store-template").html()
const template = Handlebars.compile(source)
for (i of items) {
    const newHTML = template(i)
    $(".items").append(newHTML)
}
