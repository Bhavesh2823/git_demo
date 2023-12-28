let num = prompt("Guess The Number : ");
gamenum = 50;
let playagain;
let b=0;
while(num !== gamenum && b==0)
{
    if(num == gamenum)
   {
    playagain = prompt("!!! You Won !!! Want To Play Again ?(y/n)");
    if(playagain=="y")
    {
        num = prompt("Guess The Number : ");
    }
    else{
        console.log("Well Played");
        b=1;
    }
   }
   else{
   num=prompt("!!! You Loose !!! Enter Again ");
   }
}
