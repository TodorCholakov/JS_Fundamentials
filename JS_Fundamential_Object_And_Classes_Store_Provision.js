function solve (arr1, arr2){
   let object1 = {}
   for (let index = 0; index < arr1.length; index+=2) {
      const element = arr1[index];
      object1[element] = Number(arr1[ index+1 ])
   }
   for (let index = 0; index < arr2.length; index+=2) {
      element = arr2[index];
      if(object1.hasOwnProperty(element)){
         object1[element] += Number(arr2[index+1])
      } else {
         object1[element]  = Number(arr2[index+1])
      }
   }
   for (const key in object1) {
     console.log (`${key} -> ${object1[key]}`)
   }
}
solve ([
   'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
   ],
   [
   'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
   ]
   
   )