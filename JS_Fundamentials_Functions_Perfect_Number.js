//OK 52/100
function solution(param)
{
let tmp = 0;
   for(let i=1;i<=param/2; i++)
     {
         if(param%i === 0)
          {
            tmp += i;
          }
     }
     if(tmp != 0 && tmp == param )
        {
       console.log("We have a perfect number!");
        } 
     else
        {
       console.log("It's not so perfect.");
        }   
 } 
 solution(28); 