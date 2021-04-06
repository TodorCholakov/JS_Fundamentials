function solve(arr){
   let obj = {}
   let capacity = Number(arr.shift())
   //console.log (capacity)
   for (const line of arr) {
       let [command, ...tokens ] = line.split("=")
       //console.log (command, tokens)
       if (command ==="Add"){
            Add(obj, command, tokens) 
       } else if (command === "Message"){
           Message(obj, command, tokens)
           
       } else if (command === "Empty"){
           Empty(obj, command, tokens)
           
       } else if (command==="Statistics"){
           let count= 0
           for (const key in obj) {
            obj[key].sum = obj[key].sent+obj[key].received
            if (obj[key].sum>=capacity){
                console.log (`${obj[key]} reached the capacity!`)
            }
            count++
           }
           let sorted = Object.entries(obj).sort(Sort)
           console.log (`Users count: ${count}`)
           for (const line of sorted) {
               //console.log (line)
               console.log(`${line[0]} - ${line[1].sum}`)
           }
       }
   }
   function Add (obj, command, tokens){
    let name = tokens[0]
    let sent = Number(tokens[1])
    let received = Number(tokens[2])
    let sum = 0
    //console.log (name)
    if (!obj.hasOwnProperty(name)){
     obj[name] = {sent, received, sum}
     if (obj[name].sent+obj[name].received>=capacity){
         console.log(`${obj[name]} reached the capacity!`)
     }
    } 
   }
   function Empty (obj, command, tokens){
    let name = tokens[0]
    if (tokens[0] ==="All"){
        for (const key in obj) {
           delete obj[key]
        }
    } 
    if (obj.hasOwnProperty(name)){
         delete obj[name]
    }
   }

   function Message (obj, command, tokens){
   let sender = tokens[0]
   let receiver = tokens[1]
   if (obj.hasOwnProperty(sender) && obj.hasOwnProperty(receiver)){
       obj[sender].sent++
       obj[receiver].received++
       if (obj[sender].sent+obj[sender].received>=capacity){
            console.log(`${sender} reached the capacity!`)
            delete obj[sender]
       } 
       if (obj[receiver].received+obj[receiver].sent>=capacity){
            console.log(`${receiver} reached the capacity!`)
            delete obj[receiver]
            }
        }
    }

   function Sort(a, b){
       let [aName, aInfo] = a
       let [bName, bInfo] = b
      // console.log (obj)
       //console.log (aName, aInfo.received)
       let sortL = bInfo.received - aInfo.received
       if (sortL===0) {
           return aName.localeCompare(bName)
       }
       return sortL
   }
   // console.log (obj)

   }




solve (
    [
        '10',
        'Add=Mark=5=4',
        'Add=Clark=3=5',
        'Add=Berg=9=0',
        'Add=Kevin=0=0',
        'Message=Berg=Kevin',
        'Statistics'
      ]
)