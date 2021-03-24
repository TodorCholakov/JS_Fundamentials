function solve (arr){
   let myObj = {}
   for (const line of arr) {
      let sArr = line.split(" ")
      let name = sArr.shift()
      sArr.map(Number)
      if (!myObj.hasOwnProperty(name)){
      myObj[name] = sArr
   } else {
      myObj[name].push(...sArr)
   }
}

let sorted = Object.values(myObj).sort((a,b)=> average(a,b))

   function average (a, b){
      let aSum = 0
      for (let i =0; i<a[1]; i++){
         aSum+=a[1][i]
      }
      let bSum = 0;
      for (let i =0; i<b[1]; i++){
         bSum+=b[1][i]
      }
      let aAverage = aSum/a[1].length;
      let bAverage = bSum/b[1].length;
      return bAverage-aAverage;
   }
  
console.log(sorted)}
solve(
   ['Lilly 4 6 6 5',
   'Tim 5 6',
   'Tammy 2 4 3',
   'Tim 6 6 5 4 5 5']
   )