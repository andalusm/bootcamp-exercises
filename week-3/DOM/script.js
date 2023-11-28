$("button").click(function(){
    console.log($(this).closest("div").find("span").text());

});