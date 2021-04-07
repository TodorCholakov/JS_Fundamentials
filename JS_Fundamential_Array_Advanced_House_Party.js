function solve (arr){
   let names = [];
   let isGoingArr = []
   for (let name of arr) {
      let tempArr = name.split(" ");
      if (tempArr[2]=="not"){
         if(names.includes(tempArr[0])){
            for (let a=0; a<names.length; a++){
               if (names[a]==tempArr[0]){
                  names.splice(a, 1);
               }
            }
         } else {
            console.log (`${tempArr[0]} is not in the list!`)
         }
      } else {
         if (names.includes(tempArr[0])){
            console.log (`${tempArr[0]} is already in the list!`)
      } else {
         names.push(tempArr[0])
      }
   }
}
   for (let name of names) {
      console.log (name)
   }
}
solve(
   ['Tom is going!',
   'Annie is going!',
   'Tom is going!',
   'Garry is going!',
   'Jerry is going!']
)