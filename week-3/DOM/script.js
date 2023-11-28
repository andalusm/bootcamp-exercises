$("button").click(function(){
    console.log($(this).closest("div").find("span").text());

});

// Spot check 2

$("button").click(function(){
    console.log($(".container").find("p").text());

});


