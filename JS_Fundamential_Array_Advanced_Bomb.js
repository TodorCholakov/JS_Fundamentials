//OK 100/100
function solve (arr1, arr2){
  let specialNumber = arr2[0]
  let power = arr2[1]
  for (let a=0; a<arr1.length; a++) {
   let element = arr1[a]
     if (specialNumber==element){
      let firstel = a-power;
      let sumPower = power*2+1
      if (firstel<0){
        sumPower= sumPower+firstel 
        firstel=0; 
      }  
        arr1.splice(firstel, sumPower)
        a=0;
     }
  }
  let sum = 0
  for (let b=0; b<arr1.length; b++){
      sum+=arr1[b]
  }
console.log (sum)
}
solve([1, 2, 2, 4, 2, 2, 2, 9],
   [4, 2]
   )
