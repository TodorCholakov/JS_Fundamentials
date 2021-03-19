function solve(data){
    let str = data.shift()

    for (const line of data) {
        let [command, ...value] = line.split(":|:")
        if (command =="Reveal"){
            console.log(str);
            break;
        } else if (command =="ChangeAll"){
            let i = str.indexOf(value[0])
            while (str.indexOf(value[0])!=-1){
                
              str = str.substring(0, i)+value[1]+str.substring(i+1)
              i =str.indexOf(value[0])
            }
        }  else if (command =="Reverse"){
            if (str.includes(value[0])){
                let index = str.indexOf(value[0])
                let a = str.substring(index, index+value[0].length).split("").reverse().join("");
                str = `${str.substring(0, index)}${str.substring(index+value[0].length)}${a}`
               
            } else {
                console.log ("error")
            }
            console.log(str)
        } 
        else if (command =="InsertSpace" ){
           str = str.substring(0, Number(value[0]))+" "+str.substring(Number(value[0]))
           console.log(str)
        }
    
      
    

}}
solve([
    'heVVodar!gnil',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]
  )