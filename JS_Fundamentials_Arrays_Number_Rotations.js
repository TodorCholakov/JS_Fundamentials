//OK 100/100
function solve (arr, param1){
    let res =[];
  for (let i =0; i<param1; i++){
   arr.push(arr.shift());
  }
  
  for (let a of arr){
  res+=a+' ';
}
res.slice(0, res.length -1);
console.log (res);
}
solve ([2, 4, 15, 31], 5);