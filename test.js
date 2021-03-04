

function solve (n, k){
  
  let sequnece = [1];
 for (let a=0; a<n; a++){
     let startIndex = Math.max (0, a-k);
     let innerSequence = sequnece.slice(startIndex, a);
     let sum=0;
     for (let j =0; j<innerSequence.length; j++){
        sum+=innerSequence[j];
     }
     sequnece[a]= sum;
 }
  console.log (sequnece.join(" "))
}
solve(6, 3)
//solve([0, 1, 1, 5, 2, 2, 6, 3, 3])


