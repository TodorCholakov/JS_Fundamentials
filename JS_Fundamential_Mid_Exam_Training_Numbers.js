//OK 88/100
function solve (param1){
   let res =[]
   let res1 = [];
   let sum=0;
   let average;
   if (param1.length<5){
      res = "No"
   }
   //find average
   for (let a=0; a<param1.length; a++){
      sum +=Number(param1[a])
   }
   average = sum/param1.length;
   console.log (average)
   for (let b=0; b<param1.length; b++){
      if (param1[b]>average){
         res.push(param1[b])
         console.log (res)
      }
   }
   res.sort(function(a, b){return b - a})
   for (let d=0; d<5; d++) {
      res1.push(res[d])
   }
   console.log (res1.join(" "));
}

solve ([5, 2, 3, 4, 10, 30, 40, 50, 20, 50, 60, 60, 51])