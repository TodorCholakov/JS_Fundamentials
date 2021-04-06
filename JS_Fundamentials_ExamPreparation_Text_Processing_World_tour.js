function solve(arr){
 let str = arr.shift()
 //console.log (str)
 for (const line of arr) {
   let [command, ...tokens] = line.split(":")
   if (command==="Add Stop"){
     let index = Number(tokens[0])
     let string = tokens[1]
     if (index>=0 && index<=str.length){
       let sub1 = str.substring(0, index)
       let sub2 = str.substring(index, str.length)
       str = sub1+string+sub2
       console.log (str)
     } else {
       continue
     }
   } else if (command==="Remove Stop"){
     let index2 = Number(tokens[0])
     let index3 = Number(tokens[1])
     if ((index2>=0 && index2<=str.length) || (index3>=0 && index3<=str.length)){
     let sub3 = str.substring(0, index2)
     let sub4 = str.substring(index3+1, str.length)
     str =sub3+sub4
     console.log(str)} else {
      continue
    }
   } else if (command==="Switch"){
    let sub1 = tokens[0]
    let sub2 = tokens[1]
    while (str.includes(sub1)){
      str = str.replace(sub1, sub2)
    }
    console.log (str)
  }  else if (command==="Travel"){
    console.log (`Ready for world tour! Planned stops: ${str}`)
  }
}}

solve (
  [
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
  ]
)