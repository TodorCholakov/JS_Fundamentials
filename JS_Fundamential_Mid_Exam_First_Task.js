function solve (param1, param2, param3){
   let dayBisquits = param1;
   let employees = param2;
   let otherProd = param3;
   let period = 30;
   let sum=0;
   let diff, diffBisquits, resPercent = 0
   let prodPerDay = dayBisquits*employees;
   let prodPerThirdDay = Math.floor(prodPerDay-prodPerDay*0.25);
   for (let a=1; a<=period; a++){
      if (a%3!=0){
         sum+=prodPerDay
      } else {
         sum+=prodPerThirdDay;
      }
   }
   console.log (`You have produced ${sum} biscuits for the past month.`)
      if (otherProd<sum){
         diff = sum-otherProd;
         diffBisquits = diff/otherProd*100
         resPercent = diffBisquits.toFixed(2);
         console.log (`You produce ${resPercent} percent more biscuits.`);
      } else {
         diff = otherProd-sum;
         diffBisquits = diff/otherProd*100
         resPercent = diffBisquits.toFixed(2);
         console.log (`You produce ${resPercent} percent less biscuits.`);
      }
}

solve (65, 12, 26000)