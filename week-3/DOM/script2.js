const arr = []
$(".generator").click(function(){

    console.log("Processor ID: "+$(this).closest(".processor").attr("id"));
    const computerId = $(this).closest(".computer").data().id
    arr.push({cmp_id: computerId})
    console.log("Computer’s data-id: "+computerId);   
    console.log("BUS: "+$(this).closest(".computer").find(".BUS").text());
})

$(".validator").click(function(){

    console.log($(this).closest(".computer").find(".generator").text());
    console.log($(this).closest(".computer").find(".MB").text());
    console.log($(this).closest(".computer").find(".QR").text());
    
})