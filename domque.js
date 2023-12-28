/*question 1
let h2 = document.querySelector("h2");
h2.innerText = h2.innerText + " from Apna College Students";
console.log(h2.innerText);*/

//question 2
/*let divs = document.querySelectorAll(".contain");
let idx = 1;
for(div of divs){
    div.innerText = `New Block ${idx}`;
    idx++;
}*/

//getAttribute method
/*let divission = document.querySelector("div");
console.log(divission);

let id = divission.getAttribute("name");
console.log(id);

let paragraph = document.querySelector("p");
console.log(paragraph);

let claas = paragraph.getAttribute("class");
console.log(claas);*/

/*let divission = document.querySelector("p");
console.dir(divission);
divission.style.background = "red";
divission.style.fontSize ="13px";

let new_btn = document.createElement("button");
new_btn.innerText = "Click";
divission.append(new_btn);
divission.prepend(new_btn);
divission.before(new_btn);
divission.after(new_btn);*/

let new_hedding = document.createElement("h1");
new_hedding.innerHTML = "<i>Hello Guys !</i>";
document.querySelector("body").prepend(new_hedding);

document.querySelector("p").remove();

