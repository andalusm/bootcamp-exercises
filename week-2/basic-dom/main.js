const playingField = document.getElementById("playing-field")
console.log(playingField)
const down = document.getElementById("down")
console.log(down)
// changing location of ball
const ball = document.getElementById("ball")
const MOVE_AMOUNT = 15
const moveBall = function(location, axis,max,min){
    
    const newLocation = (parseInt(ball.style[location])||0) +axis*MOVE_AMOUNT
    if(min <=newLocation &&  newLocation<= max)
        ball.style[location] = newLocation+"px"


}
const movement = {
    right :{loc:'left',axis : 1,max:405,min:0},
    left: {loc:'left',axis : -1,max:405,min:0},
    up : {loc:'top',axis : -1,max:375,min:0},
    down : {loc:'top',axis : 1,max:375,min:0}
}
all_move = ['up','down','left','right']
for (const m of all_move) {
    document.getElementById(m).addEventListener("click",()=>{moveBall(movement[m].loc,movement[m].axis,movement[m].max,movement[m].min)})
}



// const moveRight = function(){
//     const newLocation = (parseInt(ball.style['left'])||0) +MOVE_AMOUNT
//     if(newLocation <= 405)
//         ball.style['left'] = newLocation+"px"
// }

//   const moveUp = function(){
//     const newLocation = (parseInt(ball.style['top'])||0) -MOVE_AMOUNT
//     if(newLocation >= 0){
//         ball.style['top'] = newLocation+"px"
//     }
    
    
//   }
//   const moveLeft = function(){
//     const newLocation = (parseInt(ball.style['left'])||0) -MOVE_AMOUNT
//     if(newLocation >= 0){
//         ball.style['left'] = newLocation+"px"
//     }
    
    
//   }
//   const moveDown = function(){
//     const ball = document.getElementById("ball")
//     const newLocation = (parseInt(ball.style['top'])||0) +MOVE_AMOUNT
//     if(newLocation <= 375)
//     ball.style['top'] = newLocation+"px"
    
//   }
//   changing color of ball
ball.style.backgroundColor = "blue" 
// adding header with styles
const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)
// adding header with class
const subHeader = document.createElement("h2")
subHeader.innerHTML = "Game by: ~The Creater~"
subHeader.setAttribute("class","sub-header")
document.body.appendChild(subHeader)
// adding events to element
const box = document.getElementById("box")

const enterColor = function () {
    box.style.backgroundColor = "#c0392b"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}
const clickColor = function(){
    box.style.backgroundColor = "#8e44ad"
}

// Keyborads

document.addEventListener("keydown", logKey);

function logKey(e) {
    if(e.code === "ArrowUp"){
        const m = "up"
        moveBall(movement[m].loc,movement[m].axis,movement[m].max,movement[m].min);
    }
    else if(e.code === "ArrowLeft"){
        const m = "left"
        moveBall(movement[m].loc,movement[m].axis,movement[m].max,movement[m].min);
    }
    else if(e.code === "ArrowRight"){
        const m = "right"
        moveBall(movement[m].loc,movement[m].axis,movement[m].max,movement[m].min);
    }
    else if(e.code === "ArrowDown"){
        const m = "down"
        moveBall(movement[m].loc,movement[m].axis,movement[m].max,movement[m].min);
    }
}


