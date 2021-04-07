function solve(data){
    let pas = data.shift()
    let res1 = []
    let res2
   //console.log (pas)
   for (const line of data) {
       let [...command] = line.split(" ")
      // console.log (command)
        if (command[0]=='TakeOdd'){
            pas = pas.split("")
            //console.log (pas)
            for(let i=0; i<pas.length; i++){
                if (i%2!=0){
                    res1.push(pas[i])
                    //console.log (res1)
                }
            }
            res2 = res1.join("")
            console.log (res2)
        } else if(command[0]=='Cut'){
                res1.splice(command[1], command[2]) 
                
                console.log (res2)
        } else if(command[0]=='Substitute' && res2.includes(command[1])){
            
            
                while (res2.includes(command[1])){
                    res2 = res2.replace(command[1], command[2])
                   
                 }
                 console.log (res2)
            } else if (command[0]=='Substitute' && res2.includes(command[1])==-1){
                console.log ("Nothing to replace!")
            }
            else if(command[0]=='Done'   ){
                console.log (`Your password is: ${res2}`)
            }
                
    }
   }
solve (
    [
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
  ]
)