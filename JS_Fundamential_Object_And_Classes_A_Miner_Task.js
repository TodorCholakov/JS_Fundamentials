function solve (data){
   let myObj = {};
   for (let a=0; a<data.length; a+=2) {
      if (!myObj.hasOwnProperty([data[a]])){
         myObj[data[a]]= Number(data[a+1])
      } else {
         myObj[data[a]]+= Number(data[a+1])
      }
   }
   for (const el in myObj) {
   console.log(`${el} -> ${myObj[el]} `)
   }
}
solve(
   [
      'Gold',
      '155',
      'Gold',
      '5',
      'Silver',
      '10',
      'Copper',
      '17'
      ]
      
   )