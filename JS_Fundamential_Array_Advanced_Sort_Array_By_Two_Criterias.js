//OK 100/100
function solve (arr1){

  arr1.sort((a, b) => a.length-b.length || a.localeCompare(b));
  for (let n of arr1) {
    console.log (n)
  }
}

solve([ "bet123a", "alpha", "gamasfdma"])
