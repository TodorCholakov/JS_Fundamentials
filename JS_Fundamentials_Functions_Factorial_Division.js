//OK 52/100
function solution(param1, param2){
   let res1 = 1;
   let res2 = 1;
      for (let i=param1; i>0; i--){
         res1 *= i
      }
      for (let i=param2; i>0; i--){
         res2 *= i
      }
      let res = (res1/res2).toFixed(2)
      console.log (res)
  }
 
 solution(5, 2); 