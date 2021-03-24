//OK 100/100
function solve (str){
  let arr = str.split("")
  let res = []
  //console.log(res)
  for (let i =0; i<arr.length; i++) {
      if (arr[i]!=arr[i+1]){
          res.push(arr[i]);
      } 
  }
  console.log (res.join(""))
}
   


solve ('aaaaabbbbbcdddeeeedssaa')