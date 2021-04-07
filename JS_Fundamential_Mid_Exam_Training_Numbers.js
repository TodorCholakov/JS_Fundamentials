function solve (param1){
   param1 = param1.split(" ").map(Number)
   let res =[]
   let res1 = [];
   let sum=0;
   let average;
   if (param1.length<5){
      res1[0] = "No";
   } else {
   for (let a=0; a<param1.length; a++){
      sum +=Number(param1[a])
   }
   average = sum/param1.length;
   for (let b=0; b<param1.length; b++){
      if (param1[b]>average){
         res.push(param1[b])
      }
   }
   res.sort((a, b)=> b - a)
   for (let d=0; d<5; d++) {
      res1.push(res[d])
   }
}
   console.log (res1.join(" "));
}
solve ('10 20 30 40 50')