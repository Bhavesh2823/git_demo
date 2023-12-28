function mysum(a,b)
{
   let sum =a+b;
   console.log(sum);
}
mysum(2,3);

const arrowmul=(a,b)=>{
    return  a*b;
}

function countVolwels(str)
{
   let count=0; 
   for(el of str)
   {
    if(el=="a" || el=="e" || el=="i"|| el=="o" || el=="u")
    {
        count++;
    }
   }
   console.log(count);
}

let arrowCountVolwels = (str) =>
{
    let count=0; 
   for(el of str)
   {
    if(el=="a" || el=="e" || el=="i"|| el=="o" || el=="u")
    {
        count++;
    }
   }
   console.log(count);
}

let arr = [2,3,4,6,7,9,12];
let sumofno=0
arr.forEach((el)=>
{
    let sq = el*el;
    console.log(sq);
    sumofno = sumofno + sq;
})
console.log(sumofno)

