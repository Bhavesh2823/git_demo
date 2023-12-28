//Q.1
let btn = document.createElement("button");
btn.innerHTML ="Click me";
btn.style.backgroundColor = "black";
btn.style.color = 'white';
document.querySelector("body").prepend(btn);

//Q.2
let para = document.querySelector('p');
para.classList.add("newclass");
//para.classList.remove("newclass");
