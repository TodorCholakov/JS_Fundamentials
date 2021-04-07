function solve (arr1, arr2){
  let tempArr1 = []
  let count=0;
 let slicedElements = arr1.slice(0, arr2[0])
 slicedElements.splice(0, arr2[1])
 let filtered = slicedElements.filter(x=>x==arr2[2])
 console.log (`Number ${arr2[2]} occurs ${filtered.length} times.`)
}
solve([5, 2, 3, 3, 4, 1, 6],
  [5, 2, 3])
