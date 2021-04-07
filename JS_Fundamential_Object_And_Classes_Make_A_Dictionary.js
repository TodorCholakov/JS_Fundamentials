function solve (data){
   let arr = []
   let myObj = {}
   let dicRow ={}
  for (const line of data) {
     dicRow = JSON.parse(line);

     for (const [key, value] of Object.entries(dicRow)) {
      myObj[key] = value 
     
     }
  }
let sorted = Object.keys(myObj)
    .sort()
    .reduce((acc, key) => ({
        ...acc, [key]: myObj[key]
    }), {})

  for (const key in sorted) {
     console.log(`Term: ${key} => Definition: ${sorted[key]} `)
  }
}
solve(
   [
      '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
      '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
      '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
      '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
      '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
      '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
      ]  
   )