function solve (data){
 let myObj = {};
 for (const line of data) {
    let [direction, carNumber] = line.split(", ");
    if (direction=="IN"){
      myObj[carNumber]=direction;
    }else {
       delete myObj[carNumber]
    }
 }
 return Object.keys(myObj)
 .sort((a,b)=>a.localeCompare(b))
 .join("\n");
}
console.log(solve(
   ['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
))
