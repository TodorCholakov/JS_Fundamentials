function solve(arr){
  let str = arr.shift()
  for (const line of arr) {
    let [command,...tokens] = line.split("|")
    if(command==="ChangeAll"){
      while(str.includes(tokens[0])){
        str = str.replace(tokens[0], tokens[1])
      }
  } else if (command==="Insert"){
    let tmp = str.substring(0, tokens[0])
    let word = tokens[1]
    let tmpEnd = str.substring(tokens[0], str.length)
    str = tmp+word+tmpEnd
  } else if (command==="Move"){
    let mTmp = str.substring(0, tokens[0])
    let mTmpstart = str.substring(tokens[0], str.length)
    str = mTmpstart+mTmp  
  } else if (command==="Decode"){
    console.log(`The decrypted message is: ${str}`)
    break;
  }
  }
}

solve (
  [ 
  'zzHe', 
  'ChangeAll|z|l', 
  'Insert|2|o', 
  'Move|3', 
  'Decode' ]
)