//OK 100/100
function solve (arr1){

  arr1.sort((a, b) => b-a );
  let res = []
  let b=0;
  let res1 = []
  for (let a=arr1.length-1; a>0; a--){
      res.push (arr1[b], arr1[a])
      b++
  }
 for (let b=0; b<arr1.length; b++) {
   res1.push(res[b]);
 }
 console.log (res1.join(" "))
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
