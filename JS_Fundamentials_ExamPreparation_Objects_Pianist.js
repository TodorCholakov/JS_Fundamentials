function solve(data){
    let num = Number(data.shift())
    //console.log(num)
    let obj ={}
  for (let i =0; i<num; i++){
      let [piece, composer, key] = data[i].split("|")
      //console.log (piece, composer, key)
      obj[piece] = {composer, key}
  }
  data.splice(0, num)
  //console.log (obj)
  for (const line of data) {
      let [command, ...tokens] = line.split("|")
      if (command==="Add"){
          Add(obj, command, tokens)
      } else if (command==="Remove"){
        Remove(obj, command, tokens)
      } else if (command==="ChangeKey"){
        ChangeKey(obj, command, tokens)
      } else if (command==="Stop"){
        break;
      }
  }

    function Add (obj, command, tokens){
        let pieceF = tokens[0]
        let composer = tokens[1]
        let key = tokens[2]
        if (obj.hasOwnProperty(pieceF)){
            console.log (`${pieceF} is already in the collection!`)
        } else {
            obj[pieceF] = {composer, key}
            console.log (`${pieceF} by ${composer} in ${key} added to the collection!`)
        }
    }

    function Remove (obj, command, tokens){
        let pieceF = tokens[0]
        if (obj.hasOwnProperty(pieceF)){
            console.log (`Successfully removed ${pieceF}!`)
            delete obj[pieceF]
        } else {
            console.log (`Invalid operation! ${pieceF} does not exist in the collection.`)
        }
    }

    function ChangeKey (obj, command, tokens){
        let pieceF = tokens[0]
        let pieceNewF = tokens[1]
        if (obj.hasOwnProperty(pieceF)){
            obj[pieceF].key = pieceNewF
            console.log (`Changed the key of ${pieceF} to ${pieceNewF}!`)
        } else {
            console.log (`Invalid operation! ${pieceF} does not exist in the collection.`)
        }
    }

    let sortedObj = Object.entries(obj).sort(SortFunc);

    function SortFunc (a, b){
        let [aName, aInfo] = a
        let [bName, bInfo] = b
        let sorted = aName.localeCompare(bName)
        if (sorted===0){
            return aInfo[0].localeCompare(bInfo[0])
        }
        return sorted
    }
    for (const line of sortedObj) {
       console.log (`${line[0]} -> Composer: ${line[1].composer}, Key: ${line[1].key}`) 
    }
}

solve (
    [
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
      ]
      
)