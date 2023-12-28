let name = prompt("Enter Your Name ")
let marks = prompt("Enter Your Marks !")

if(marks<=100 && marks>=80)
{
    console.log(name,"Has Grade A");
}
else if(marks<80 && marks>=70){
    console.log(name,"Has Grade B");
}
else if(marks<70 && marks>=60){
    console.log(name,"Has Grade C");
}
else if(marks<60 && marks>=50){
    console.log(name,"Has Grade D");
}
else if(marks<50){
    console.log(name,"Has Failed");
}
else{
    console.log("YOU HAVE ENTERED THE WRONG ENTRY");
}