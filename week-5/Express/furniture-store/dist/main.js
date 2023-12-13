let money = 500
$("#money").text("Amount of money:" + money)
const fetchPrice = function () {
    let input = $("#furn-input").val()
    console.log(input)

   
}

const buyFurniture = function () {
    let input = $("#furn-input").val()
    console.log(input)
    $.get(`priceCheck/?forniture=${input}&money=${money}`, function(result){
        if(result.buy){
            $.get(`buy/${input}`, function (forniture) {
                money = money - forniture.price
                $("#money").text("Amount of money:" + money)
                $("#result").text(`you’ve just bought ${input} for ${forniture.price}. There are ${forniture.inventory} left now in the store.`)
            })
        }
        else{
            $("#result").text(`Couldn't buy ${input} you don't have enough money. you should get a job`)
        }
    })
}


const checkPrice= function()
{
    $.get(`priceCheck/chair`, function (price) {
        if(price.price < chairPrice){
            $.get(`priceCheck/?forniture=chair&money=${money}`, function(result){
                if(result.buy){
                    $.get(`buy/chair`, function (forniture) {
                        money = money - forniture.price
                        $("#money").text("Amount of money:" + money)
                        $("#result").text(`you’ve just bought chair for less`)
                        console.log("bought chair for less")
                        chairPrice = price.price
                    })
                }
                else{
                    $("#result").text(`Couldn't buy chair you don't have enough money. you should get a job`)
                }
            })

        }
        else{
            chairPrice = price.price
            console.log("still waiting for a price drop...")
        }
    })
}
let chairPrice = 0
$.get(`priceCheck/chair`, function (price) {
    chairPrice = price.price 
})

setInterval(checkPrice, 3000);


