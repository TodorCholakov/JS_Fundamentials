
function solve (arr){
  let str = arr.shift()
  for (let line of arr) {
      let [command, ...tokens] = line.split(":|:")
      //console.log (command, tokens)
      if (command==="ChangeAll"){
        while(str.includes(tokens[0])){
            str = str.replace(tokens[0], tokens[1])
        }
        console.log (str)
      } else if (command==="Reverse"){
        let tmp =str.indexOf(tokens[0])
        if(str.includes(tokens[0])){
            let word = str.substring(tmp, tmp+tokens[0].length)
            str = str.substring(0, tmp)
            word = word.split("").reverse().join("")
            str = str+word
            console.log (str)
        } else {
            console.log ('error')
        }
      } else if (command==="InsertSpace"){
        let sub1  = str.substring(0, tokens[0])
        let sub2  = str.substring(tokens[0], str.length)
        str = sub1+" "+sub2
        console.log (str)
      }else if (command==="Reveal"){
        console.log (`You have a new text message: ${str}`)
      }
      
  }
}
   


solve ([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ])