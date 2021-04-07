function solve (data){
  let myMap = new Map();
 data
  .split(' ')
  .forEach(element => {
      element=element.toLowerCase();
      if (!myMap.has(element)){
         myMap.set(element, 0)
      }
         myMap.set(element, myMap.get(element)+1)
   });
   return Array.from(myMap.keys())
   .filter(x=>myMap.get(x)%2!==0)
   .join(' ')//

}
console.log(solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'))
