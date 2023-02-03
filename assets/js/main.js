let box = document.querySelector(".box");
let move = document.querySelector(".move");
let boxHeight = box.offsetHeight - 4;
let boxWidth = box.offsetWidth - 4;
let moveWidth = move.offsetWidth;
let moveHeigth = move.offsetHeight;
let topPos = 0;
let leftPos = 0;

document.body.addEventListener("keydown", (e)=>{
    if(e.which == 37 && leftPos>0){
        leftPos -= 10;
    }
    if(e.which == 38 && topPos>0){
        topPos -= 10;
    }
    if(e.which == 39 && leftPos< boxWidth-moveWidth){
        leftPos += 10;
    }
    if(e.which == 40 && topPos< boxHeight-moveHeigth){
        topPos += 10;
    }


    move.style.top = topPos + "px"
    move.style.left = leftPos + "px"
})