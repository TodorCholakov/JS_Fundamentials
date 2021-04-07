function solve (param1){
  let wagons = param1.shift().split(" ").map(Number);
  let capacity = Number(param1.shift())
  for (const line of param1){
     let [comm, n] = line.split(" ");
     if (comm=="Add"){
        wagons.push(Number(n))
     } else {
        let passangers = Number(comm)
        for (let a=0; a<wagons.length; a++){
           if (wagons[a]+passangers<=capacity){
              wagons[a]+=passangers;
              break;
           }
        }
     }
  }
  console.log (wagons.join(" "))
}

solve (
['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)