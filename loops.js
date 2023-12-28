//for loop
let sum="MAHABHARAT";
let size=0;
for(let i of sum)
{
    console.log(i);
    size++;
}
console.log(size);


let n=0;
let i=20;
do{ 
    n = n+i;
    i++;
}while(i<=10);
console.log(n);

let num =0;
for(let i=0;i<=100;i++)
{
    if(i%2===0)
    {
        num=num+i;
        console.log(i);
    }
}
console.log(num);