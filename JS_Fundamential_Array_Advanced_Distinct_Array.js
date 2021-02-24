//OK 100/100
function solve (param1){
 /*for (let a=0; a<param1.length; a++) {
    for (let b=a+1; b<param1.length; b++){
      if (param1[a]==param1[b]){
       
         param1.splice(b, 1)
        
      }
    }
   
 }
 */
let dist = [];
for (let n of param1) {
   if (!dist.includes(n)){
      dist.push(n)
   }
}
 console.log (dist.join(" "))
}

solve([7,
   8,
   9,
   7,
   2,
   3,
   4,
   1,
   2])