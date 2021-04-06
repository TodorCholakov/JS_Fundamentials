
function solve (arr){
    let obj ={}
    let num = Number(arr.shift())
    
  for (let i =0; i<num; i++){
    let [plantName, rarity] = arr.shift().split("<->")
    //console.log (plantName, rarity)
    rarity = Number(rarity)
    obj[plantName] = {rarity, "rating":[]}
  }

  
  for (const line of arr) {
      let [command, tokens] = line.split(": ")
      //console.log (command, tokens)
      if (command==="Rate"){
          Rate(obj, command, tokens)
      } else if(command==="Update"){
        Update(obj, command, tokens)
      } else if(command==="Reset"){
        Reset(obj, command, tokens)
      } 
      else if(command==="Exhibition"){
        for (const key in obj) {
          let tmpArr = obj[key].rating
          let avg = 0
          if (tmpArr.length>0){
            avg = tmpArr.reduce((a,b)=>a+b, 0)/tmpArr.length
            //console.log (avg)
          } else {
            avg = tmpArr.reduce((a,b)=>a+b, 0)
            //console.log (avg)
          }
          obj[key].rating = avg
          
         // console.log (sorted)
          
          
        }
        let sorted = Object.entries(obj).sort(Sorted)
          console.log(`Plants for the exhibition:`)
          for (const line of sorted) {
            console.log(`- ${line[0]}; Rarity: ${line[1].rarity}; Rating: ${Number((line[1].rating)).toFixed(2)}`)
          }
        break
      }
  }

}
  function Rate (obj, command, tokens){
      let [plant, points] = tokens.split(" - ")
      //console.log (plant)
      points=Number(points)
      obj[plant].rating.push(points)
  }
  function Update (obj, command, tokens){
    let [plant, points] = tokens.split(" - ")
    //console.log (plant)
    points=Number(points)
    obj[plant].rarity=points
} 
    function Reset (obj, command, tokens){
    let plant = tokens
    obj[plant].rating = []
}


function Sorted (a, b){
  let [aPlant, aInfo] = a
  let [bPlant, bInfo] = b

  let sortTmp = bInfo.rarity-aInfo.rarity
  if (sortTmp===0){
    return bInfo.rating-aInfo.rating
  }
  return sortTmp
}
  //console.log(obj)

solve ([
    '4',
    'Arnoldii<->4',
    'Arnoldii<->8',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate1: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Rate: Woodii - 6',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
  ]
)
console.log ("///////////////////////////////////////")
solve ([
      '2',
      'Candelabra<->10',
      'Oahu<->10',
      'Rate: Oahu - 7',
      'Rate: Candelabra - 6',
      'Exhibition'
]
)