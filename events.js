let div = document.querySelector('div');
let body = document.querySelector('body');
let currmode = "light";

div.addEventListener("mouseover",()=>{
    if(currmode==="light"){
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    
    console.log(currmode);
})