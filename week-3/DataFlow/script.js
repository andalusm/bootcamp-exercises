const posts = [{name:"Andalus", text: "Happy birthday"}]

const render = function(){
    $("#posts").empty()
    for (const p of posts) {
        const post_div = $("<div><b>"+p.name+":</b> "+p.text+"</div>")
        const len = posts.length
        post_div.click(function(){
            posts.splice(len-1, 1)
            render()
        })
        $("#posts").append(post_div)
        
    }

}
$("#post").click(function(){
const name = $("#name").val()
const wish = $("#wish").val()
posts.push({name,text:wish})

$("#name").val('')
$("#wish").val('')
render()
});
render()




