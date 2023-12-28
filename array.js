let tmarks = [85,97,44,37,76,60]
let sum = 0;
for(let el of tmarks)
{
    sum = sum + el;
}
sum=(sum/tmarks.length);
console.log(`The Average Marks Of Class = ${sum}`);

let prices = [250,645,300,900,50];
let val;
for(let i=0;i<prices.length;i++)
{
    offer = prices[i]/10;
    prices[i]= prices[i]-offer;
}
console.log(prices);