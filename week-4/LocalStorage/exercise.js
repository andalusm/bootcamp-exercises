
let wisdom = JSON.parse(localStorage.wisdom || "[]")
let id = wisdom.length


$('.wisText').on("click", "button", function () {
    const toBeRemoved = $(this.closest('div'))
    const index = wisdom.findIndex(e => e.id === toBeRemoved.id)
    wisdom.splice(index,1)
    localStorage.wisdom = JSON.stringify(wisdom)
    render()
})

const render = function () {
    $(".wisText").empty()
    wisdom.forEach(element => {
        const div = $(`<div id='${element.id}'}> ${element.text} <button> X </button></div>`)
        $(".wisText").append(div)
    });
    
}

const submit = function () {
    const value = $("#input").val()
    id += 1
    wisdom.push({ text: value, id:id })
    localStorage.wisdom = JSON.stringify(wisdom)
    $("#input").val("")
    render()
}

const clearWis = function () {
    wisdom = []
    localStorage.wisdom = JSON.stringify(wisdom)
    render()
}

render()