function solve(arr){
   let str = arr.shift()
   //console.log (str)
   for (const line of arr) {
       let [command, ...tokens] = line.split(" ")
       if(command === "Change"){
           let char = tokens[0]
           let replacement = tokens[1]
           while (str.includes(char)){
               str = str.replace(char, replacement)
           }
        console.log (str)
       } else if (command === "Includes"){
        let otherString = tokens[0]
        if (str.includes(otherString)){
            console.log ("True")
        } else {
        console.log ("False")
        }
       } else if (command === "End"){
        let otherString = tokens[0]
        if (str.endsWith(otherString)){
            console.log ("True")
        } else {
            console.log ("False")
        }
       } else if (command === "Uppercase"){
            str=str.toUpperCase()
            console.log (str)
       } else if (command === "FindIndex"){
            let index = tokens[0]
            let indexF = str.indexOf(index)
            console.log (indexF)
       } else if (command === "Cut"){
            let startIndex = Number(tokens[0])
            let length = Number(tokens[1])
            str = str.substring(startIndex, startIndex+length)
            console.log (str)
        } else if (command==="Done"){
            break;
        }
    }
}

solve (
    [
        '//Th1s 1s my str1ng!//',
        'Change 1 i',
        'Includes string',
        'End my',
        'Uppercase',
        'FindIndex I',
        'Cut 5 5',
        'Done'
      ]
      
)