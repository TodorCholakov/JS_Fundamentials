function solve(data){
let key = data.shift()
let el=0;

while (data[el]!=="Generate"){
    
    let tempArr = data[el].split(">>>")
    let command = tempArr[0];
    if (command==="Slice"){
        let first = key.substring(0, Number(tempArr[1]))
        //console.log (first)
        let second = key.substring(Number(tempArr[2]))
        //console.log (second)
        key = `${first}${second}`;
        console.log(key)
       
    } else if (command==="Flip" && tempArr[1]==="Upper"){
        let first = key.substring(0, Number(tempArr[2]))
        let second = key.substring(Number(tempArr[3]))
        let third = key.substring(Number(tempArr[2]), Number(tempArr[3])).toUpperCase()
        key = `${first}${third}${second}`;
       console.log (key)
    }else if (command==="Flip" && tempArr[1]==="Lower"){
        let first = key.substring(0, Number(tempArr[2]))
        let second = key.substring(Number(tempArr[3]))
        let third = key.substring(Number(tempArr[2]), Number(tempArr[3])).toLowerCase()
        key = `${first}${third}${second}`;
       console.log (key)
    } else if (command==="Contains"){
        if (key.includes(tempArr[1])){
            console.log (`${key} contains ${tempArr[1]}`)
        } else {
            console.log (`Substring not found!`)
        }
    }
    el++
}

console.log(`Your activation key is: ${key}`)

}
solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
  ])