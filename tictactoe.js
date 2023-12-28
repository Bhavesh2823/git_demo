let boxes=document.querySelector(".hemlo");
let array= Array.from(boxes);
let reset=document.querySelector('.reset');
let turnX = true;

const winpat = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
array.forEach((hemlo) => { 
    hemlo.addEventListener("click",()=>{
        console.dir("box was clicked");
    })
})