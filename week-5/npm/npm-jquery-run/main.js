$('div').click(function(){
    $(this).css("background-color","#f39c12") 
    $.get("http://data.nba.net/10s/prod/v1/2016/players.json").then((result)=>{
        console.log(result)
    })
})

