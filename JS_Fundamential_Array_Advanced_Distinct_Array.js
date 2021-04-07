function solve (param1){
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