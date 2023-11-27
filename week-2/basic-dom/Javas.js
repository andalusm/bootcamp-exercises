const box1 = document.getElementById("box")
box1.onclick = function () {
    box1.innerHTML = "clicked"
}
box1.onmouseenter = function(){
    box1.innerHTML = "Stop hovering and click me!"
}

const addItem = function(){
    const ul = document.getElementById("list");
    const il= document.createElement("li");
    il.innerHTML = "A new item!";
    ul.appendChild(il);
}

const box = document.createElement("div") // dynamically creating an element

box.setAttribute("class", "box")
box.onclick = function(){       // adding an event to the new element
    box.innerHTML = "I'm alive!"
}

document.body.appendChild(box) // now the box will be on the page, and will react to a click!