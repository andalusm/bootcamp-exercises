const container = document.getElementById("container")
const num = 5
const getRandomColor = function() {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    
    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
  }
const leaveColor = function () {
    this.style.backgroundColor = getRandomColor();
    isSameColor();
}
for(let i=0;i<num;i++)
{
    const box = document.createElement("box");
    box.setAttribute("class","box");
    box.onmouseenter=leaveColor;
    container.appendChild(box);
}
const isSameColor = function(){
    const boxes = document.getElementsByClassName("box");
    const color = boxes[0].style.backgroundColor;
    let sameColor = true;
    for (const box of boxes) {
        if(box.style.backgroundColor !== color){
            sameColor = false;
            break;
        }
    }
    if(sameColor)
    {
        document.getElementById("success").innerHTML = "Nice Job!"; 
    }
    
    
}